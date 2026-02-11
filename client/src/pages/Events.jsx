import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://event-planner-pro-xw9a.onrender.com/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Upcoming Events</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {events.map((event) => (
          <div key={event._id} style={cardStyle}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><b>Date:</b> {event.date}</p>
            <p><b>Time:</b> {event.time}</p>
            <p><b>Location:</b> {event.location}</p>
            <p><b>Price:</b> ₹{event.price}</p>

            <button style={btnStyle}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};

const btnStyle = {
  marginTop: "10px",
  padding: "10px",
  border: "none",
  background: "#0f172a",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Events;
