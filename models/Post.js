const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  avatar: {
    type: String
  },
  name: {
    type: String
  },
  image: {
    filename: {
      type: String
    },
    path: {
      type: String
    }
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  font: {
    type: String
  },
  comments: [
    {
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", postSchema);
