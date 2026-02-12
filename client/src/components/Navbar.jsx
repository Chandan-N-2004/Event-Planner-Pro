import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const linkStyle = (path) => ({
    marginLeft: "20px",
    color: location.pathname === path ? "#38bdf8" : "white",
    textDecoration: "none",
    fontWeight: "500"
  });

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#020617",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>EventPlannerPro</h2>

      <div>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/events" style={linkStyle("/events")}>Events</Link>

        {!token ? (
          <>
            <Link to="/login" style={linkStyle("/login")}>Login</Link>
            <Link to="/signup" style={linkStyle("/signup")}>Signup</Link>
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            style={{
              marginLeft: "20px",
              background: "#ef4444",
              border: "none",
              padding: "8px 15px",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
