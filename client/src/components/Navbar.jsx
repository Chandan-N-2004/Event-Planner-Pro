import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#0f172a",
      color: "white"
    }}>
      <h2>EventPlannerPro</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/events" style={linkStyle}>Events</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/signup" style={linkStyle}>Signup</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  marginLeft: "20px",
  color: "white",
  textDecoration: "none"
};

export default Navbar;
