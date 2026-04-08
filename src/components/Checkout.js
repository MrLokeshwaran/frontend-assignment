import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const handlePayment = () => {
    if (cart.length === 0) {
      Swal.fire("Cart Empty", "Add items to checkout", "error");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Payment Successful 🎉",
      text: `Order placed successfully! Total: ₹ ${total}`
    });

    setCart([]);
    navigate("/home");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h3>Total Amount: ₹ {total}</h3>

      <div className="qr-box">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=lokeshwaransd@ok" alt="QR Payment" />
        <p>Scan & Pay using UPI</p>
      </div>

      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
}

export default Checkout;