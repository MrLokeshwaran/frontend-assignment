import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
      {/* Pass cart and search to Navbar */}
      <Navbar cart={cart} search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={<Home cart={cart} setCart={setCart} search={search} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;