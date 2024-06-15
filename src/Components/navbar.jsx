import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faArrowLeft,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  const showSideBar = () => {
    setHidden(true);
  };

  const hideSideBar = () => {
    setHidden(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Tier.</div>
      <div className="links">
        <ul className="ul">
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
        <div className="bars">
          <button className="NButtons">
            <Link to="/cart" className="prod">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </Link>
          </button>
        </div>
        {/* <div className="bars">
          <button className="NButtons">
            <Link to="/profile" className="a">
              <FontAwesomeIcon icon={faPerson} className="icon" />
            </Link>
          </button>
        </div> */}
        <div className="bars">
          <button className="NButtons">
            <Link to="/search" className="a">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </Link>
          </button>
        </div>

        <div className="bars">
          <button className="NButtons" onClick={showSideBar}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>
        </div>
      </div>

      {hidden && (
        <div className="sideBar">
          <button className="sideIcon" onClick={hideSideBar}>
            <FontAwesomeIcon icon={faArrowLeft} className="leftIcon" />
          </button>
          <div className="sideBarLogo">Tier.</div>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            alias corrupti, voluptate totam dicta commodi distinctio aspernatur
            eum. Sunt, consequuntur?
          </h3>
          <div className="sideBTN">
            <button className="sideButtons">
              <Link to="/register" className="a">
                Register
              </Link>
            </button>
            <button className="sideButtons">
              <Link to="/login" className="a">
                Login
              </Link>
            </button>
            <button className="sideButtons">
              <Link to="/logout" className="a">
                Logout
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
