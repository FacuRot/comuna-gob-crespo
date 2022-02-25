const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const request = require("request");
const sgMail = require("@sendgrid/mail");

router.post(
  "/contact",
  [
    check("name", "Ingrese su nombre").not().isEmpty(),
    check("email", "Ingrese un email valido").isEmail(),
    check("email", "Ingrese su direccion de correo electronico")
      .not()
      .isEmpty(),
    check("text", "El mensaje no puede estar vacío").not().isEmpty(),
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
        sgMail.setApiKey(config.get("sendgridApiKey"));
        const msg = {
          to: "comunagcrespo@yahoo.com.ar",
          from: `${email}`,
          subject:
            "Email enviado desde la plataforma de la Comuna de Gdor. Crespo",
          text: `Este mensaje fue escrito por ${name} \n Mensaje: ${text}`,
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

router.post(
  "/taller",
  [
    check("nombre", "El nombre no puede estar vacío").not().isEmpty(),
    check("dni", "El DNI no puede estar vacío").not().isEmpty(),
    check("edad", "La edad no puede estar vacía").not().isEmpty(),
    check("direccion", "La dirección no puede estar vacía").not().isEmpty(),
    check("telefono", "El telefono no puede estar vacío").not().isEmpty(),
    check("emailAdulto", "El email no puede estar vacío").not().isEmpty(),
    check("emailAdulto", "Ingresá una dirección de mail válida").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        taller,
        nombre,
        dni,
        edad,
        direccion,
        telefono,
        emailAdulto,
        nombreAdulto,
        dniAdulto,
        direccionAdulto,
        telefonoAdulto,
      } = req.body;

      sgMail.setApiKey(config.get("sendgridApiKey"));
      const msg = {
        to: `facurot1@gmail.com`,  //secculturagcrespo@gmail.com
        from: `facu_rot@hotmail.com`,
        subject: `Inscripción taller ${taller}`,
        text: `
                Taller: ${taller} \n
                Nombre y apellido: ${nombre} \n 
                DNI: ${dni} \n
                Edad: ${edad} \n
                Dirección: ${direccion} \n
                Telefono: ${telefono} \n
                Email adulto: ${emailAdulto} \n
                Nombre adulto: ${nombreAdulto} \n
                DNI adulto: ${dniAdulto} \n
                Dirección adulto: ${direccionAdulto} \n
                Telefono adulto: ${telefonoAdulto}`,
      };
      sgMail.send(msg);

      return res.status(200).send("success");
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .send("Ocurrio un error, intentelo de nuevo mas tarde.");
    }
  }
);

module.exports = router;
