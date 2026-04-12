import React, { useState, useEffect } from "react";
import "./OrderHistory.css";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // ❌ CANCEL ORDER
  const cancelOrder = (id) => {
    const updated = orders.filter((order) => order.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="history-container">

      <h2>📦 Order History</h2>

      {orders.length === 0 ? (
        <h3>No orders found</h3>
      ) : (
        orders.map((order) => (
          <div className="order-box" key={order.id}>

            {/* ORDER INFO */}
            <h4>Order ID: {order.id}</h4>

            <p>📅 Date: {order.date}</p>
            <p>🕒 Time: {order.time}</p>

            <hr />

            {/* ITEMS */}
            {order.items.map((item, i) => (
              <div key={i}>
                {item.name} - ₹{item.price}
              </div>
            ))}

            {/* TOTAL */}
            <h3>Total: ₹{order.total}</h3>

            {/* CANCEL BUTTON */}
            <button
              onClick={() => cancelOrder(order.id)}
              style={{
                background: "red",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "10px",
                marginTop: "10px",
                cursor: "pointer"
              }}
            >
               Cancel Order
            </button>

          </div>
        ))
      )}
    </div>
  );
}