import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    axios
      .get("https://event-planner-pro-xw9a.onrender.com/api/bookings/user-demo")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));

  }, []);

  return (
    <div className="events-page">
      <h1>📖 My Booking History</h1>

      {/* Loading */}
      {loading && (
        <h3 style={{ textAlign: "center" }}>
          Loading bookings...
        </h3>
      )}

      {/* No bookings */}
      {!loading && bookings.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          No bookings yet 😔
        </h3>
      )}

      {/* Booking cards */}
      <div className="events-grid">
        {bookings.map((b, i) => (
          <motion.div
            key={i}
            className="event-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>🎟 Booking #{i + 1}</h2>

            <p className="desc">
              Event ID: {b.eventId}
            </p>

            <div className="event-info">
              <span>👤 User: {b.userId}</span>
              <span>
                📅 {new Date(b.createdAt || Date.now()).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookingHistory;  