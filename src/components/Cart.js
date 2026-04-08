import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    Swal.fire("Removed", "Item removed from cart", "success");
  };

  const changeQty = (index, delta) => {
    const updated = [...cart];
    if (!updated[index].qty) updated[index].qty = 1;
    updated[index].qty += delta;
    if (updated[index].qty < 1) updated[index].qty = 1;
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/home">Shop Now</Link></p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>
                <div className="qty">
                  <button onClick={() => changeQty(i, -1)}>-</button>
                  <span>{item.qty || 1}</span>
                  <button onClick={() => changeQty(i, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(i)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹ {total}</h3>
          <button className="clear-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;