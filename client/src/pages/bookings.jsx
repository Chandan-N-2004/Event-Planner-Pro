import { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/bookings/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        const data = await res.json();
        setBookings(data.bookings || data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((b, i) => (
          <div
            key={i}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{b.event?.title || "Event"}</h3>
            <p>
              Date:{" "}
              {b.date
                ? new Date(b.date).toLocaleDateString()
                : "Not available"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}