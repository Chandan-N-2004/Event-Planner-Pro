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
    <div className="events-page">
      <h1>Upcoming Events 🎉</h1>

      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>📍 {event.location}</p>
            <p>📅 {event.date}</p>
            <p>💰 ₹{event.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
