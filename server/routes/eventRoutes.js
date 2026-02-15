const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/create", eventController.createEvent);
router.get("/", eventController.getEvents);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;

// Create event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Delete event (Admin)
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", adminMiddleware, createEvent);
router.delete("/:id", adminMiddleware, deleteEvent);
