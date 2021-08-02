const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const sgMail = require("@sendgrid/mail");

const NinoArbol = require("../../models/NinoArbol");

router.post(
  "/",
  [
    check("nombre", "Ingresá el nombre del niño/a").not().isEmpty(),
    check("fechaNac", "Ingresá la fecha de nacimiento del niño/a")
      .not()
      .isEmpty(),
    check("address", "Ingresá la dirección de la vivienda").not().isEmpty(),
    check("tel", "Ingresá un número de tel. de contacto").not().isEmpty(),
    check("padre1", "Ingresá el nombre de al menos uno de los padres")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, fechaNac, address, tel, padre1, padre2 } = req.body;
    try {
      const ninoObject = {
        apenom: nombre,
        fechaNac: fechaNac,
        address: address,
        tel: tel,
        padre1: padre1,
        padre2: padre2,
      };

      const nino = new NinoArbol(ninoObject);
      await nino.save();

      sgMail.setApiKey(config.get("sendgridApiKey"));
      const msg = {
        to: `comunagcrespo@yahoo.com.ar`,
        from: `facu_rot@hotmail.com`,
        subject: `Inscripción un niño, un árbol`,
        text: `
        Nombre niño/a: ${nombre} \n
        Fecha de nacimiento: ${fechaNac} \n
        Dirección: ${address} \n
        Tel.: ${tel} \n
        Padre/Madre: ${padre1} \n
        Padre/Madre: ${padre2}`,
      };
      sgMail.send(msg);

      return res.status(200).send("success");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
