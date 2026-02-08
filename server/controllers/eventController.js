const Event = require("../models/Event");

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json({ message: "Event Created", event });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};
