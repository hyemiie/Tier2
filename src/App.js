// App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/navbar";
import About from "./Components/About";
import "./Main.css";
import Register from "./Components/Register";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className={`main ${isHome ? "main1" : ""}`}>
              <Home />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes for other components/pages */}
      </Routes>
    </div>
  );
}

export default App;
