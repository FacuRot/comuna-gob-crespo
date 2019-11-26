const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const upload = require("../../services/file-upload");
const mongoose = require("mongoose");
const fs = require("fs");

const Post = require("../../models/Post");
const User = require("../../models/User");

var singleUpload;

// @route   POST api/posts/:id
// @desc    Create a post
// @access  private
router.post(
  "/:id",
  [
    (singleUpload = upload.single("postImage")),
    auth,
    [
      check("text", "El cuerpo de la noticia no puede estar vacio")
        .not()
        .isEmpty(),
      check("title", "El titulo de la noticia no pede estar vacio")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      var filename = "";
      var path = "";

      if (req.file) {
        filename = req.file.location;
        path = req.file.path;
      }

      const newPost = {
        title: req.body.title,
        text: req.body.text,
        font: req.body.font,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        image: {
          filename: filename,
          path: path
        }
      };

      let id = req.params.id;
      if (req.params.id === 0) {
        id = mongoose.Types.ObjectId(req.params.id);
      }

      // Update post
      let post = await Post.findById(id);

      if (post) {
        post = await Post.findOneAndUpdate(
          { _id: id },
          { $set: newPost },
          { new: true }
        );

        return res.status(200).json(post);
      }

      // Create
      post = new Post(newPost);

      await post.save();

      singleUpload(req, res, function(err, some) {
        if (err) {
          console.log(err);
        }
      });

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "No se encontro la noticia" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "No se encontro la noticia" });
    }

    res.status(500).json(error);
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete post by id
// @access  private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "No se encontro la noticia" });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "No estas autorizado para realizar esta accion." });
    }

    await post.remove();

    res.json({ msg: "Post remove" });
  } catch (error) {
    console.error(error);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "No se encontro la noticia" });
    }

    res.status(500).json(error);
  }
});

// @route   GET api/posts/pdf/licencia-conducir
// @desc    Material de estudio licencica de conducir
// @access  public
router.get("/pdf/licencia-conducir", (req, res) => {
  var file = fs.createReadStream(
    "./public/ansv_licencias_libro_senales_de_transito.pdf"
  );

  file.pipe(res);
});

module.exports = router;
