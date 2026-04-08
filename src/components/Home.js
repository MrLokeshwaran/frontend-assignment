import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./Home.css";

// ✅ MOVE OUTSIDE
const productsData = [
  { id: 1, name: "Apple", category: "fruits", price: 120, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { id: 2, name: "Banana", category: "fruits", price: 60, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { id: 3, name: "Chicken", category: "meat", price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3ocEKBfsZqAbOvRgNe_W4Cb-TXtz-Z7zeNI-uGqqesrJEXX0VkJNaRs&s" },
  { id: 4, name: "Fish", category: "meat", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvwsON2dUnCoK521HiumRvBtmj47HiGoMWABbEQYmTcCnjQX57aAdHdk&s" },
  { id: 5, name: "Chips", category: "snacks", price: 40, image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Potato-Chips.jpg" },
  { id: 6, name: "Milk", category: "dairy", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklPWmIHRIe2Z7w9a6FSmjR3vdt_4Lp7eIcyMw9G1xxxdjif-T3pltTTQ&s" },
  { id: 7, name: "Juice", category: "beverage", price: 90, image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." }
];

function Home({ cart, setCart, search }) {
  const [filtered, setFiltered] = useState(productsData);
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (search) {
      setFiltered(
        productsData.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (active === "all") {
      setFiltered(productsData);
    } else {
      setFiltered(
        productsData.filter(item => item.category === active)
      );
    }
  }, [search, active]); // ✅ no warning now

  const addToCart = (product) => {
    setCart([...cart, product]);
    Swal.fire({
      title: "Added!",
      text: `${product.name} added to cart`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
  };

  const filterCategory = (category) => setActive(category);

  return (
    <div className="main-container">
      <div className="sidebar">
        <p className={active === "all" ? "active" : ""} onClick={() => filterCategory("all")}>All</p>
        <p className={active === "fruits" ? "active" : ""} onClick={() => filterCategory("fruits")}>Fruits & Vegetables</p>
        <p className={active === "meat" ? "active" : ""} onClick={() => filterCategory("meat")}>Meat & Fish</p>
        <p className={active === "snacks" ? "active" : ""} onClick={() => filterCategory("snacks")}>Snacks</p>
        <p className={active === "dairy" ? "active" : ""} onClick={() => filterCategory("dairy")}>Dairy</p>
        <p className={active === "beverage" ? "active" : ""} onClick={() => filterCategory("beverage")}>Beverage</p>
      </div>

      <div className="products">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;