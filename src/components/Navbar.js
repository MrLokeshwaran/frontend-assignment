import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart, search, setSearch }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  /* GET USER */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  return (
    <div className="navbar">
      <h2 className="logo">🛒 Grocery</h2>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* MOBILE MENU */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* LINKS */}
      <div className={open ? "nav-links active" : "nav-links"}>
        <Link to="/home">Home</Link>

        {/* CART WITH BADGE */}
        <Link to="/cart" className="cart-link">
          🛒 Cart
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </Link>

        <Link to="/orders">📦 Orders</Link>
        <Link to="/contact">📞 Contact</Link>
        <Link to="/" onClick={() => localStorage.removeItem("user")}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;