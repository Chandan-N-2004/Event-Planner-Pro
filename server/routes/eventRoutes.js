const express = require("express");
const router = express.Router();

const adminMiddleware = require("../middleware/adminMiddleware");

const {
  createEvent,
  getEvents,
  deleteEvent
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/create", adminMiddleware, createEvent);
router.delete("/:id", adminMiddleware, deleteEvent);

module.exports = router;