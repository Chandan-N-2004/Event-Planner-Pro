import { useState } from "react";

export default function CreateEvent() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://event-planner-pro-xw9a.onrender.com/api/events/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ title })
        }
      );

      const data = await res.json();
      alert(data.message || "Event Created");

      setTitle("");
    } catch (err) {
      alert("Error creating event");
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Event</h1>

      <input
        placeholder="Event title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Create Event
      </button>
    </div>
  );
}