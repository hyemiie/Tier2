import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Tier.</div>
      <div className="links">
        <ul>
          <li className=".a">
            <Link to="/" className="prod">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="prod">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="prod">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="prod">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="Mbuttons">
        <button className="NButtons">
          {" "}
          <Link to="/cart" className="a">
            View Cart
          </Link>
        </button>
        <button className="NButtons">
          <Link to="/register" className="a">
            Register
          </Link>
        </button>
        <button className="NButtons">
          <Link to="/login" className="a">
            Login
          </Link>
        </button>
        <button className="NButtons">
          <Link to="/logout" className="a">
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
