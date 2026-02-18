import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const linkStyle = (path) => ({
    marginLeft: "25px",
    color: location.pathname === path ? "#38bdf8" : "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px"
  });

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 50px",
        background: "rgba(2,6,23,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo */}
      <h2 style={{ fontWeight: "bold", letterSpacing: "1px" }}>
        EventPlannerPro
      </h2>

      {/* Navigation Links */}
      <div>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/events" style={linkStyle("/events")}>Events</Link>

        <Link to="/bookings" style={linkStyle("/bookings")}>
          My Bookings
        </Link>


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
              marginLeft: "25px",
              background: "#ef4444",
              border: "none",
              padding: "9px 18px",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s"
            }}
            onMouseOver={e =>
              (e.target.style.background = "#dc2626")
            }
            onMouseOut={e =>
              (e.target.style.background = "#ef4444")
            }
          >
            Logout
          </button>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
