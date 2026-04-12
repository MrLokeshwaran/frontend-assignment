import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      Swal.fire("Error ❌", "Please register first", "error");
      return;
    }

    if (user.email === email && user.password === password) {
      Swal.fire("Success 🎉", "Login successful", "success").then(() => {
        navigate("/home");
      });
    } else {
      Swal.fire("Error ❌", "Invalid email or password", "error");
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-box" onSubmit={handleLogin}>

        <h2>Login</h2>

        {/* EMAIL */}
        <div className="input-box">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD WITH EYE */}
        <div className="input-box">
          <FaLock />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="eye-icon"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Login</button>

        <p>
          New user? <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  );
}