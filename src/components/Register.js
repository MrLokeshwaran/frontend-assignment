import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({ title: "Registered Successfully 🎉", text: "Now login to continue", icon: "success" }).then(() => navigate("/"));
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Register;