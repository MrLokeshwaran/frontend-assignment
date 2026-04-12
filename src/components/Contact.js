import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      Swal.fire("Error", "Fill all fields", "error");
      return;
    }

    Swal.fire("Sent ✅", "We will contact you soon!", "success");

    setName("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <form className="contact-box" onSubmit={handleSubmit}>
        <h2>Contact Us 📞</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}