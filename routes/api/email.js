const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const request = require("request");
const sgMail = require("@sendgrid/mail");

router.post(
  "/",
  [
    check("name", "Ingrese su nombre")
      .not()
      .isEmpty(),
    check("email", "Ingrese un email valido").isEmail(),
    check("email", "Ingrese su direccion de correo electronico")
      .not()
      .isEmpty(),
    check("text", "El mensaje no puede estar vacío")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (
      req.body.captcha === undefined ||
      req.body.captcha === "" ||
      req.body.captcha === null
    ) {
      console.log("Captcha Invalido");
      return res.status(400).json({ msg: "Es necesario completar el captcha" });
    }

    const { name, email, text } = req.body;
    try {
      // Secret Key
      const secret = config.get("recaptchaSecretKey");
      // Verification URL
      const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

      request(verifyURL, (err, response, body) => {
        body = JSON.parse(body);

        // If not successful
        if (body.success !== undefined && !body.success) {
          return res.status(400).json({ msg: "Captcha Invalido" });
        }

        // If successful
        console.log(email);
        sgMail.setApiKey(config.get("sendgridApiKey"));
        const msg = {
          to: "comunagcrespo@yahoo.com.ar",
          from: `${email}`,
          subject:
            "Email enviado desde la plataforma de la Comuna de Gdor. Crespo",
          text: `Este mensaje fue escrito por ${name} \n Mensaje: ${text}`
        };
        sgMail.send(msg);
        return res.status(200).json({ msg: "Captcha Exitoso" });
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Ocurrio un error intentelo de nuevo más tarde.");
    }
  }
);

module.exports = router;
