console.log("HOME PAGE LOADED");

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background:
            "radial-gradient(circle at top, #0f172a, #020617)"
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          🎉 EventPlannerPro
        </h1>

        <p style={{ opacity: 0.8, fontSize: "18px" }}>
          Plan • Book • Manage Events Seamlessly
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link to="/events">
            <button className="book-btn">
              Explore Events
            </button>
          </Link>

          <Link to="/bookings">
            <button
              className="book-btn"
              style={{ marginLeft: "12px" }}
            >
              My Bookings
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="events-page">
        <h1>Why Choose EventPlannerPro?</h1>

        <div className="events-grid">

          <div className="event-card">
            <h2>⚡ Fast Booking</h2>
            <p className="desc">
              Book events instantly with secure access.
            </p>
          </div>

          <div className="event-card">
            <h2>📅 Smart Event Management</h2>
            <p className="desc">
              Admins can easily create and manage events.
            </p>
          </div>

          <div className="event-card">
            <h2>🔒 Secure Platform</h2>
            <p className="desc">
              Authentication + protected booking system.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          opacity: 0.6
        }}
      >
        © 2026 EventPlannerPro • Built by Chandan
      </footer>

    </div>
  );
}

export default Home;
