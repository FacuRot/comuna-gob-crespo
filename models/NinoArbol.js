const mongoose = require("mongoose");

const NinoArbolSchema = new mongoose.Schema({
  apenom: {
    type: String,
    required: true,
  },
  fechaNac: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  padre1: {
    type: String,
  },
  padre2: {
    type: String,
  },
});

module.exports = NinoArbol = mongoose.model("ninoArbol", NinoArbolSchema);
