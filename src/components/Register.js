import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire("Error ❌", "All fields required", "error");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    Swal.fire("Success 🎉", "Registered successfully", "success").then(() => {
      navigate("/");
    });
  };

  return (
    <div className="auth-container">

      <form className="auth-box" onSubmit={handleRegister}>

        <h2>Register</h2>

        {/* NAME */}
        <div className="input-box">
          <FaUser />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div className="input-box">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD WITH EYE */}
        <div className="input-box">
          <FaLock />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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

        <button type="submit">Register</button>

        <p>
          Already have account? <Link to="/">Login</Link>
        </p>

      </form>

    </div>
  );
}