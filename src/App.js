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
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Main from "./component/Main";

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
              <Main />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes for other components/pages */}
      </Routes>
    </div>
  );
}

export default App;
