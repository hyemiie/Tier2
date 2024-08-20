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
// import "./Main.css";
import Register from "./Components/Register";
// import Search from "./Components/Search";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Main from "./component/Main";
import './App.css'
import Hero from "./component/Hero";
import AllPage from "./component/AllPage";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from "./Components/Checkout";
// import PaymentForm from "./Components/PaymentForm";
import Error from "./Components/Error";

// const stripePromise = loadStripe('pk_test_51Pdp6NRqu1K8wT3V7cIQ7yjfMGPNkxAHBBJChmqiNBePm7AT2VfsgpBuMG1eCswnbvj0tCIfNwbmtcbzCi3y0BCQ00ZRzL3Obl');

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
        {/* <Elements stripe={stripePromise}>
      <Checkout/>
    </Elements> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <div className={`main ${isHome ? "main1" : ""}`}>
            <div >
              <AllPage />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/checkoutPage" element={<PaymentForm/>} /> */}
        <Route path="/error" element={<Error/>} />

        {/* Add more routes for other components/pages */}
      </Routes>
    </div>
  );
}

export default App;


