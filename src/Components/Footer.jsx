import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faPhone,
  faBox,
  faBuilding,
  faF,
  faCoffee,
  faCamera,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const phoneNumbers = ["08065455878", "09066580336"];

  return (
    <div className="footer">
      <div className="footerGrid">
        <div className="Firstsection">
          <h1>Tier</h1>
         
        </div>

        <div className="secSection">
        <div className="ulArrangement">
          
          <ul className="footerUL">
            {/* <h3>Guides</h3> */}
            <li>
              <Link to="/" className="footLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footLink">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="footLink">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="footLink">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footLink">
                Contact Us
              </Link>
            </li>
          </ul>

       
</div>
        </div>

        {/* <div className="fourthSection">
          <h2 className="subscribe">SUBSCRIBE</h2>
          <h3 className="subText">
            Enter your email to recieve weekly notifications <br />
            about our Products{" "}
          </h3>
          <span>
            {" "}
            <input type="text" />
            <FontAwesomeIcon icon={faEnvelope} className="subIcon" />
          </span>
        </div> */}
      </div>
      <div className="copyright">
        <h3>2024 Tier.Inc All Rights Reserved</h3>
        <div className="footerIcons">
            <FontAwesomeIcon icon={faCamera} className="footIcon" />
            <FontAwesomeIcon icon={faHome} className="footIcon" />
            <FontAwesomeIcon icon={faCoffee} className="footIcon" />
          </div>
      </div>
    </div>
  );
}

export default Footer;
