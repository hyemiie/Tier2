import React from "react";
import "./About.css";
import AbouImage from "../Images/Images/aboutImage.webp";
import AboutImage from "../Images/Images/about5.jpeg"
import { useSpring, animated } from "react-spring";
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
          <span className="SSpan">
            <h3>Exclusive Design</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunLorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidun
          </span>
         
        </div>
        <animated.img
          src={AbouImage}
          alt=""
          className="aboutImage"
          style={SlideIn}
        />
      </div>
      <div className="About2">
        
        <div className="secondSection">
          {/* <span className="Exclusive"> */}
          <span className="SSpan">
            <h3>Exclusive Design</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunLorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidun
          </span>
         
        </div>
        {/* <div className="imgDiv">  */}
        <animated.img
          src={AboutImage}
          alt=""
          className="aboutImage"
          style={SlideIn}
        />
                {/* <div className="aboutImg"> */}
g
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default About;
