import React from "react";
import "./About.css";
import AbouImage from "../Images/Images/about6.jpeg";
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
        <div className="secondSection">
          <div className="messageDiv">
            <h3>Why choose Us</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidun.
            <div className="aboutGrid">
            <ul>
              <li> * Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li> * Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li>* Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li>* Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              </ul>
              <button>Shop now</button>

            </div>
          </div>
         
        </div>
        <div className="imageDiv"><animated.img
          src={AbouImage}
          alt=""
          className="aboutImage"
          style={SlideIn}
        /></div>
        
      </div>
      <div className="About about2">
        <div className="secondSection">
          <div className="messageDiv">
            <h3>Why choose Us</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidun.
            <div className="aboutGrid">
            <ul>
              <li> * Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li> * Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li>* Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li>* Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li>
              </ul>
              <button>Shop now</button>
            </div>
          </div>
         
        </div>
        <div className="imageDiv"><animated.img
          src={AboutImage}
          alt=""
          className="aboutImage"
          style={SlideIn}
        /></div>
        
      </div>
    </div>
  );
}

export default About;
