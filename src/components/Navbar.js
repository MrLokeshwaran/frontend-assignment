import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart = [], search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h2 className="logo">🛒 Grocery</h2>

      <div className="search-box">
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/home">Home</Link>
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;