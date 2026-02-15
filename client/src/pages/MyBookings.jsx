import { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Login required");
      return;
    }

    axios
      .get(
        `https://event-planner-pro-xw9a.onrender.com/api/bookings/${userId}`
      )
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className="page">
      <div className="events-page">
        <h1>🎟 My Bookings</h1>

        {bookings.length === 0 ? (
          <h3>No bookings yet</h3>
        ) : (
          bookings.map((b, i) => (
            <div key={i} className="event-card">
              Event ID: {b.eventId}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;