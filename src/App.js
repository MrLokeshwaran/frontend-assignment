import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import OrderHistory from "./components/OrderHistory";
import Contact from "./components/Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
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

        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/orders" element={<OrderHistory />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;