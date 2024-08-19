import React from "react";
import Image1 from "./thumbs/lamp.png";
import homeProduct1 from '../Images/product\ \(1\).png'
import homeProduct2 from '../Images/product\ \(2\).png'
import homeProduct3 from '../Images/product\ \(3\).png'
import homeProduct4 from '../Images/product\ \(4\).png'
import homeProduct5 from '../Images/product\ \(5\).png'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Categories.css'



function Categories() { 
  return (
    <div className="homeProducts">
<div className="productTexts">
  <h2>Parsley Seed skin care</h2>
  <h1>Supreme Skin Fortification</h1>
  <h2>Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect for all skin types.</h2>
  
</div>

<div className="productGrid">
  <a href="/products"><img src={homeProduct1} className="homeImg"/></a>
  <a href="/products"><img src={homeProduct2} className="homeImg"/></a>
  <a href="/products"><img src={homeProduct3} className="homeImg"/></a>
  <a href="/products"><img src={homeProduct4} className="homeImg"/></a>

</div>
    </div>
  );
}

export default Categories;
