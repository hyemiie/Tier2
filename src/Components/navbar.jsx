import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import './responsiveNavbar.css'
import axios from "axios";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [cartNumber,setCartNumber] = useState("0")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showSideBar = () => {
    setHidden(true);
    console.log('sideBar true')
  };

  const hideSideBar = () => {
    setHidden(false);
  };
  
  const getNavbarStyle = (isHome, isScrolled) => ({
    backgroundColor: isHome && !isScrolled ? 'rgb(225, 213, 213)' : 'white',
    color: 'black',
    transition: 'background-color 0.3s ease',
    // Add other styles as needed
  });



  useEffect(() => {
    const fetchCartDataNumber = async () => {
      try {
        const response = await axios.get("https://tierfrontend2.onrender.com/Cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log("cart", response);

        setCartNumber(response.data.cart_items.length)
        console.log(response.data.cart_items.length);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        // Optionally, handle error state here
      }
    };

    fetchCartDataNumber();
  }, []);
  

  return (
    <div 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`} 
      style={getNavbarStyle(location.pathname === '/', isScrolled)}
    >
      <div className="Tablinks">
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
        <div className="leftbars">
          <button className="sideButn" onClick={showSideBar}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>
        </div>
      </div>
      <div className="logo">Tier.</div>

      <div className="Mbuttons">
        <div className="bars">
          <button className="NButtons">
          <h2>{cartNumber}</h2>

            <Link to="/cart" className="prod">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </Link>
          </button>
        </div>
        {/* <div className="bars">
          <button className="NButtons">
            <Link to="/search" className="a">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </Link>
          </button>
        </div> */}

        <div className="bars rbars">
          <button className="NButtons" onClick={showSideBar}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>
        </div>
      </div>

      {hidden && (
        <div className="sideBar">
          <div className="sideMenu">
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
              <button className="sideButtons sideL">
                <Link to="/" className="a">
                  Home
                </Link>
              </button>
              <button className="sideButtons sideL">
                <Link to="/about" className="a">
                  About
                </Link>
              </button>
              <button className="sideButtons sideL">
                <Link to="/products" className="a">
                  Products
                </Link>
              </button>
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
        </div>
      )}
    </div>
  );
}

export default Navbar;

