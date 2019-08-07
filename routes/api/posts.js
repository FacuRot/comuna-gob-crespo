const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const upload = require("../../services/file-upload");

const Post = require("../../models/Post");
const User = require("../../models/User");

var singleUpload;

// @route   POST api/posts
// @desc    Create a post
// @access  private
router.post(
  "/",
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

      const newPost = new Post({
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
      });

      const post = await newPost.save();

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

// @route   POST api/posts/comment/:id
// @desc    Create a comment
// @access  public
router.post(
  "/comment/:id",
  [
    check("text", "Escriba un comentario")
      .not()
      .isEmpty(),
    check("name", "Escriba su nombre")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: req.body.name
      };

      post.comments.unshift(newComment);

      await post.save();

      res.status(200).json(post.comments);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Delete a comment
// @access  private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "No existe el comentario" });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.id.toString())
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
