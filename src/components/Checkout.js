import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const placeOrder = () => {
    if (cart.length === 0) {
      Swal.fire("Error ❌", "Cart is empty", "error");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      date: new Date().toLocaleString()
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    setCart([]);

    Swal.fire("Success 🎉", "Order placed successfully", "success").then(() => {
      navigate("/success");
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Checkout 💳</h2>

      <h3>
        Total: ₹{" "}
        {cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
      </h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}