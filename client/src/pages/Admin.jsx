import { useEffect, useState } from "react";

export default function Admin() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const deleteEvent = async (id) => {
    await fetch(`http://localhost:5000/api/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    alert("Event deleted");
    window.location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {events.map(event => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <button onClick={() => deleteEvent(event._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}