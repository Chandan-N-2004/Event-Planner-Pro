// controllers/eventController.js

exports.createEvent = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Event created successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Events fetched"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Event deleted"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};