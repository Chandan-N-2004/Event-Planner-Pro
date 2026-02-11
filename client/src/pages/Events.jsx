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
      <h1>✨ Explore Events</h1>

      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <h2>{event.title}</h2>
            <p className="desc">{event.description}</p>

            <div className="event-info">
              <span>📍 {event.location}</span>
              <span>📅 {event.date}</span>
              <span className="price">₹{event.price}</span>
            </div>

            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
