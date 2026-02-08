import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Events List</h2>

      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map((event) => (
          <motion.div
            key={event._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              background: "#f9f9f9"
            }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Price: ₹{event.price}</p>
          </motion.div>
        ))
      )}
    </div>
  );
}

export default Events;
