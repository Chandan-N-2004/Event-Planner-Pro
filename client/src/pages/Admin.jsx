import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = "https://event-planner-pro-xw9a.onrender.com/api/events";

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get(API).then(res => setEvents(res.data));
  };

  const addEvent = async () => {
    await axios.post(API, { title, description });
    fetchEvents();
    setTitle("");
    setDescription("");
  };

  const deleteEvent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchEvents();
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>

      <input
        placeholder="Event Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      /><br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      /><br /><br />

      <button onClick={addEvent}>Create Event</button>

      <hr />

      {events.map(e => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <button onClick={() => deleteEvent(e._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
