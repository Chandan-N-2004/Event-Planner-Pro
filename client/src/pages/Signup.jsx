import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(
        "https://event-planner-pro-xw9a.onrender.com/api/auth/signup",
        { name, email, password }
      );

      alert("Signup Successful");
      navigate("/login");

    } catch (err) {
      alert("Signup Failed");
      console.log(err);
    }
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="login-card">
        <h2>Create Account 🚀</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Signup;
