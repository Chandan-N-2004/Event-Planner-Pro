import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post(
        "https://event-planner-pro-xw9a.onrender.com/api/auth/login",
        { email, password }
      );

      navigate("/events");

    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={btnStyle}>
          Login
        </button>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

const pageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh"
};

const cardStyle = {
  padding: "30px",
  borderRadius: "12px",
  background: "#ffffff",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  width: "300px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Login;
