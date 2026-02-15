const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const booking = new Booking({ userId, eventId });
    await booking.save();

    res.json({ message: "Event booked successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;