const express = require("express");
const router = express.Router();

// @route   GET api/profiles
// @desc    test route
// @access  public
router.get("/", (req, res) => res.send("Profile Route"));

module.exports = router;
