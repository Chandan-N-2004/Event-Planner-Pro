import Link from "next/link";

export default function Home() {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "48px" }}>
          🎉 EventPlannerPro
        </h1>

        <p style={{ opacity: 0.8, marginTop: "10px" }}>
          Plan, Book & Manage Events Easily
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link href="/events">
            <button className="book-btn">
              Explore Events
            </button>
          </Link>

          <Link href="/bookings">
            <button className="book-btn" style={{ marginLeft: "10px" }}>
              My Bookings
            </button>
          </Link>

          <Link href="/admin">
            <button className="book-btn" style={{ marginLeft: "10px" }}>
              Admin Panel
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="events-page">
        <h1>Why EventPlannerPro?</h1>

        <div className="events-grid">
          <div className="event-card">
            <h2>📅 Easy Event Booking</h2>
            <p className="desc">
              Book events instantly with secure payment.
            </p>
          </div>

          <div className="event-card">
            <h2>🎟 Admin Event Control</h2>
            <p className="desc">
              Create, manage and track events easily.
            </p>
          </div>

          <div className="event-card">
            <h2>⚡ Fast & Secure</h2>
            <p className="desc">
              Built using modern full-stack technology.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          opacity: 0.7
        }}
      >
        © 2026 EventPlannerPro
      </footer>

    </div>
  );
}
