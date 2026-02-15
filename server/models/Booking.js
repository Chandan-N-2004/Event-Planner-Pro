const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  eventId: String,
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);