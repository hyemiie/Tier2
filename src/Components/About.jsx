import React from "react";
import "./About.css";
import AbouImage from "../Images/aboutSkin.png";
import AboutImage from "../Images/Images/about7.jpeg"
import { useSpring, animated } from "react-spring";
import Footer from "./Footer";
function About() {
  const SlideIn = useSpring({
    from: { transform: "translate3d(0px, -70px, -0px)", opacity: 0 },
    to: { transform: "translate3d(0, 0px, 0)", opacity: 1 },
    leave: { transform: "translate3d(0, -40px, 0)" },
    config: {
      tension: 200,
      friction: 40,
      duration: 4000,
    },
  });

  return (
    <div className="all">
      <div className="About">

      <div className="imageDiv"><animated.img
          src={AbouImage}
          alt=""
          className="aboutImage"
          style={SlideIn}
        /></div>

        <div className="secondSection">
          <div className="messageDiv">
            <h3>Skin Care</h3>
            <h2>Potent Solutions for Demanding Skin</h2>

            
            <div className="aboutGrid">
         <p>Discover products tailored for mature skin and urban lifestyles, offering daily hydration and the added advantage of powerful vitamins and antioxidants.</p>
              <button> <a  href="/products">Shop now</a></button>

            </div>
          </div>
         
        </div>
       
        
      </div>
      </div>
  );
}

export default About;
