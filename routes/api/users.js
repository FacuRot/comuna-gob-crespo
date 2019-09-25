const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "El usuario ya existe" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200", // tamaño de la foto
        r: "pg", // que sea apta para todo publico
        d: "mm" // que muestre un placeholder si ese mail no tiene un gravatar
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 18000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Ha ocurrido un error en el servidor.");
    }
  }
);

// @route   POST api/users/changepassword
// @desc    change user's password
// @access  private
router.post(
  "/changepassword",
  [
    auth,
    [
      check("oldPassword", "Ingresa tu contraseña actual")
        .not()
        .isEmpty(),
      check("newPassword1", "Ingresa tu nueva contraseña")
        .not()
        .isEmpty(),
      check(
        "newPassword1",
        "La nueva contraseña debe contener 6 o más caracteres"
      ).isLength({ min: 6 })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { oldPassword, newPassword1, newPassword2 } = req.body;

    if (newPassword1 !== newPassword2) {
      return res.status(400).json({
        errors: [
          { msg: "La nueva contraseña no es igual en ambas cajas de texto" }
        ]
      });
    }

    try {
      const user = await User.findById(req.user.id);

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "La antigua contraseña es erronea" }] });
      }

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(newPassword1, salt);

      await user.save();

      return res.status(200).send("Success");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Ha ocurrido un error en el servidor");
    }
  }
);

module.exports = router;
