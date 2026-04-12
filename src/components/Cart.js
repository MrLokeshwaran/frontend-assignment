import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  /* REMOVE ITEM */
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  /* INCREASE QTY */
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  /* DECREASE QTY */
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCart(updated);
    }
  };

  /* TOTAL */
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>

                <p>{item.selectedUnit}</p>

                <p>₹ {item.price}</p>

                {/* QTY CONTROLS */}
                <div className="qty-box">
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₹ {getTotal()}</h3>

          <button className="clear-btn" onClick={() => setCart([])}>
            Clear Cart
          </button>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;