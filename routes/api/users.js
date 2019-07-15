const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route   POST api/users
// @desc    register user
// @access  public
router.post(
  "/",
  [
    check("name", "Ingrese un nombre")
      .not()
      .isEmpty(),
    check("email", "Ingrese un email valido").isEmail(),
    check("password", "Ingrese una contraseña de 6 o más caracteres").isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Success");
  }
);

module.exports = router;
