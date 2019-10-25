const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const upload = require("../../services/file-upload");

const Taller = require("../../models/Taller");

// @route   POST api/talleres
// @desc    crear un taller
// @access  private
router.post(
  "/",
  [
    (singleUpload = upload.single("tallerImage")),
    auth,
    [
      check("name", "Ingrese el nombre del taller")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, instructor } = req.body;

    try {
      var filename = "";

      if (req.file) {
        filename = req.file.location;
      }

      let taller = new Taller({
        tallerImage: {
          filename
        },
        name
      });

      if (description) taller.description = description;
      if (instructor) taller.instructor = instructor;

      await taller.save();

      singleUpload(req, res, function(err, some) {
        if (err) {
          console.log(err);
        }
      });

      res.status(200).send("Success");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Ha ocurrido un error en el servidor.");
    }
  }
);

// @route   GET api/talleres
// @desc    obtener todos los talleres
// @access  public
router.get("/", async (req, res) => {
  try {
    const talleres = await Taller.find();

    res.status(200).json(talleres);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Ha ocurrido un error en el servidor.");
  }
});

// @route   GET api/talleres/:id
// @desc    obtener todos taller por id
// @access  public
router.get("/:id", async (req, res) => {
  try {
    const taller = await Taller.findById(req.params.id);

    if (!taller) {
      return res.status(400).send("No se encotro el taller buscado");
    }

    res.status(200).json(taller);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Ha ocurrido un error en el servidor");
  }
});

module.exports = router;
