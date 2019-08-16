const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = Event = mongoose.model("event", eventSchema);
