const Registration = require("../models/Registration");

// Register for Event
exports.registerEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const registration = new Registration({
      userId,
      eventId
    });

    await registration.save();

    res.json({ message: "Event Registered Successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
};


// Get User Registrations
exports.getUserRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate("userId")
      .populate("eventId");

    res.json(registrations);

  } catch (err) {
    res.status(500).json(err);
  }
};
