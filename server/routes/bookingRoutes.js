const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const authMiddleware = require("../middleware/authMiddleware");
const { getMyBookings } = require("../controllers/bookingController");

// Book an event
router.post("/", async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const booking = new Booking({
      user: userId,
      event: eventId
    });

    await booking.save();

    res.json({
      success: true,
      message: "Event booked successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get logged-in user bookings
router.get("/my-bookings", authMiddleware, getMyBookings);

// Get bookings by user ID (admin/debug)
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.params.userId
    }).populate("event");

    res.json(bookings);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;