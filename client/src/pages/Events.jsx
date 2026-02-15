import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://event-planner-pro-xw9a.onrender.com/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleBooking = async (eventId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(
        "https://event-planner-pro-xw9a.onrender.com/api/bookings",
        {
          userId: localStorage.getItem("userId"),
          eventId
        }
      );

      alert("Event booked successfully 🎉");

    } catch (err) {
      console.log(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="page">
      <div className="events-page">
        <h1>✨ Explore Events</h1>

        <div className="events-grid">
          {loading
            ? Array(6).fill().map((_, i) => (
                <div key={i} className="skeleton-card"></div>
              ))

            : events.map((event) => (
                <motion.div
                  className="event-card"
                  key={event._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>{event.title}</h2>

                  <p className="desc">{event.description}</p>

                  <div className="event-info">
                    <span>📍 {event.location}</span>
                    <span>
                      📅 {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="price">₹ {event.price}</span>
                  </div>

                  <button
                    className="book-btn"
                    onClick={() => handleBooking(event._id)}
                  >
                    Book Now
                  </button>
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Events;