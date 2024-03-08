import React from "react";
import { useState } from "react";
import "./home.css";
import Image from "../Images/Image8.png";

import Image1 from "../Images/products/beds/bartlett2.jpg";
import Image2 from "../Images/vecteezy_modern-living-room-design-illustration-ai-generative_23902309.jpg";
import Image3 from "../Images/products/bedsidetables/baker2.jpg";
import Image4 from "../Images/products/sofas/cinsofa2.jpg";
import Image5 from "../Images/products/thumlime/armchair.jpg";
import Image6 from "../Images/products/thumlime/chestofdrawers.jpg";
import Image7 from "../Images/products/thumlime/centretables.jpg";
import About from "./About";
import Categories from "./Categories";
import Footer from "./Footer";

function Home() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="bdy">
      <div className="home">
        <div className="heroImageContainer">
          <img className="heroImage" src={Image2} alt="" />
        </div>
        <div className="span">
          <h3 className="tiny">Quality and Comfortable</h3>
          <div className="MSG">
            <h2 className="message">
              {" "}
              BEST SELLING <br />
              PRODUCTS
            </h2>
            <div></div>
            <h4 className="Smessage">
              Based on your budget and preferences Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas a illo laboriosam itaque
              consequuntur eveniet, dicta qui temporibus officia tempora.{" "}
            </h4>
          </div>
          <button className="button"> Shop now</button>
        </div>
      </div>

      <div className="catg">
        <Categories />
      </div>

      <div className="aboutPage">
        {" "}
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
