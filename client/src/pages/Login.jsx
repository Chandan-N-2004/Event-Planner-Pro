import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://event-planner-pro-xw9a.onrender.com/api/auth/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);

      alert("Login Successful");
      navigate("/events");

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Login Failed");
      console.log(err);
    }
  };

  return (
    <div className="page"> {/* navbar spacing fix */}

      <motion.div
        className="login-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <p>
            Don’t have an account?
            <Link to="/signup"> Signup</Link>
          </p>

        </div>
      </motion.div>

    </div>
  );
}

export default Login;
