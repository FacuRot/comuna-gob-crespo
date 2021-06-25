const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const sgMail = require("@sendgrid/mail");

const Solicitante = require("../../models/SolicitanteVivienda");

router.post(
  "/solicitud",
  [
    check("name", "El nombre no puede estar vacío").not().isEmpty(),
    check("dni", "El DNI no puede estar vacío").not().isEmpty(),
    check("tramite", "El nro. de tramite no puede estar vacío").not().isEmpty(),
    check("tomo", "Complete tomo, folio y num. de la escritura del terreno")
      .not()
      .isEmpty(),
    check("folio", "Complete tomo, folio y num. de la escritura del terreno")
      .not()
      .isEmpty(),
    check("numero", "Complete tomo, folio y num. de la escritura del terreno")
      .not()
      .isEmpty(),
    check(
      "ingresos",
      "Complete con los ingresos del grupo familiar (debe ser mayor a $45000)"
    )
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, dni, tramite, tomo, folio, numero, ingresos, grupoFamiliar } =
      req.body;

    try {
      let solicitante = await Solicitante.findOne({ dni: dni });
      if (solicitante) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Este dni ya está registrado" }] });
      }

      solicitante = new Solicitante({
        name: name,
        dni: dni,
        tramite: tramite,
        escritura: {
          tomo: tomo,
          folio: folio,
          numero: numero,
        },
        ingresos: ingresos,
        familia: [],
      });
      solicitante.familia = [...grupoFamiliar];

      await solicitante.save();

      sgMail.setApiKey(config.get("sendgridApiKey"));
      const msg = {
        to: `secculturagcrespo@gmail.com`,
        from: `facu_rot@hotmail.com`,
        subject: `Inscripción vivienda en lote propio`,
        text: `
        Nombre solicitante: ${name} \n
        DNI solicitante: ${dni} \n
        Escritura: \n
          tomo: ${tomo} folio: ${folio} numero: ${numero} \n
        Ingresos grupo familiar: $${ingresos} \n
        Integrantes grupo familiar: \n`,
      };
      grupoFamiliar.forEach(
        (miembro) =>
          (msg.text += `  nombre: ${miembro.nombre} dni: ${miembro.dni} \n`)
      );
      sgMail.send(msg);

      return res.status(200).send("success");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
