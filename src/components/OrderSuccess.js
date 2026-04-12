import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for shopping with us.</p>

        <Link to="/home">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}