import React from "react";
import "./About.css";
import AbouImage from "../products/thumlime/bedsidetables.jpg";

function About() {
  return (
    <div className="all">
      <div className="About">
        <div className="firstSection">
          <h1>About Us</h1>
          <span className="Span">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt ,
            voluptates sed aspernatur error autem mollitia quis exercitationem
            omnis vitae harum nulla ratione.
          </span>
          <span className="Span">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt ,
            voluptates sed aspernatur error autem mollitia quis exercitationem
            omnis vitae harum nulla ratione.
          </span>
          <span className="Span">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt ,
            voluptates sed aspernatur error autem mollitia quis exercitationem
            omnis vitae harum nulla ratione.
          </span>
        </div>
        <div className="secondSection">
          {/* <span className="Exclusive"> */}
          <span className="SSpan">
            <h3>Exclusive Design</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt
          </span>
          <span className="SSpan">
            <h3>Quality Pieces</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt
          </span>
          <span className="SSpan">
            <h3>Affordable Prices</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            animi illo officia asperiores hic quae inventore incidunt
          </span>
        </div>
        {/* <div className="aboutImg"> */}
        <img src={AbouImage} alt="" className="aboutImage" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default About;
