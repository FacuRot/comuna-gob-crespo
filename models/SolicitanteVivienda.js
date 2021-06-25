const mongoose = require("mongoose");

const SolicitanteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  tramite: {
    type: String,
    required: true,
  },
  escritura: {
    tomo: {
      type: String,
      required: true,
    },
    folio: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  ingresos: {
    type: Number,
    required: true,
  },
  familia: [
    {
      nombre: {
        type: String,
      },
      dni: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = SolicitanteVivienda = mongoose.model(
  "solicitanteVivienda",
  SolicitanteSchema
);
