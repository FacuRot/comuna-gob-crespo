const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Event = require("../../models/Event");

// @route   POST api/events
// @desc    Create an Event
// @access  private
router.post(
  "/",
  auth,
  [
    check("title", "El titulo del evento no puede estar vacío")
      .not()
      .isEmpty(),
    check("text", "Se requiere una descrpipcion del evento")
      .not()
      .isEmpty(),
    check("date", "Es necesaria una fecha para el evento")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newEvent = new Event({
        title: req.body.title,
        text: req.body.text,
        date: req.body.date,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const event = await newEvent.save();

      res.status(200).json(event);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
);

// @route   GET api/events
// @desc    Get Events
// @access  public
router.get("/", async (req, res) => {
  const currentDate = new Date();

  try {
    var events = await Event.find().sort({ date: 1 });
    events = events.filter(item => {
      return item.date >= currentDate;
    });

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
