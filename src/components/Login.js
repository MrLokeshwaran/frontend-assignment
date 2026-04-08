import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      Swal.fire({ icon: "error", title: "Error", text: "Please fill all fields" });
      return;
    }

    Swal.fire({ icon: "success", title: "Login Successful", showConfirmButton: false, timer: 1500 });
    setTimeout(() => navigate("/home"), 1500);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;