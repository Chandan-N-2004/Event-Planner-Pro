const Booking = require("../models/Booking");

// Get bookings for logged-in user
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("event");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error fetching bookings"
    });
  }
};