const mongoose = require("mongoose");

const tallerSchema = new mongoose.Schema({
  tallerImage: {
    filename: {
      type: String
    }
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  instructor: {
    type: String
  }
});

module.exports = Taller = mongoose.model("talleres", tallerSchema);
