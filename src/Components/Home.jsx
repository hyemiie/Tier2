import React from "react";
import { useState } from "react";
import "./home.css";
import Image from "../Images/Image8.png";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

import About from "./About";
import Categories from "./Categories";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import MidSection from "./MidSection";

function Home() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const colorSlide = useSpring({
    from: {
      transform: "translate3d(-50px, -50px, 0)",
      opacity: 0,
      color: "pink",
    },
    to: { transform: "translate3d(0, 0px, 0)", opacity: 1, color: "white" },
    leave: { transform: "translate3d(0, -40px, 0)" },
    config: {
      tension: 100,
      friction: 40,
      duration: 2000,
    },
  });

  return (
    <div className="bdy">
      <div className="homeSectionContainer">
        <div className="homeSection">
          <div className="mainBackground">
            <h1 className="pageNumber"> 01</h1>
          </div>
          <div className="heroImageContainer"> </div>
        </div>

        <div className="heroTextContainer">
          <div className="heroText">
            <h4>MEBELAND COLLECTION</h4>
            <h2>New Interior Concept</h2>
            <p>
              He is ev Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Rem corrupti molestias accusantium obcaecati velit minima ratione
              blanditiis sapiente odio quis.
            </p>
            <animated.button className="cta" style={colorSlide}>
              <Link to="/products" className="prod">
                GET STARTED
              </Link>{" "}
            </animated.button>
          </div>
          <div className="heroProduct">
            <div className="heroProductImg"></div>
            <div className="heroProductTexts">
              <h3 className="heroProductName">Cloe Armchair</h3>
              <h3 className="heroProductPrice">Start From $100-$145</h3>
              <button className="heroProductBtn">
                {" "}
                <FontAwesomeIcon icon={faShoppingCart} className="CTAicon" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MidSection />
      </div>

      <div className="aboutPage">
        {" "}
        <About />
      </div>
      <Categories />

      <Footer />
    </div>
  );
}

export default Home;
