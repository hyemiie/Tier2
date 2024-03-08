import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faPhone,
  faBox,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  const phoneNumbers = ["08065455878", "09066580336"];

  const socialLinks = [
    {
      icon: faBox,
      url: "https://www.facebook.com/thewoodfactoryltd/",
    },
    {
      icon: faBuilding,
      url: "https://twitter.com/thewoodfactoryltd",
    },
    {
      icon: faHome,
      url: "https://www.instagram.com/thewoodfactory_ltd/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="Firstsection">
          <p className="footerLogo">
            <h1>Tier</h1>
            <h3>Furniture</h3>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil in
            nemo, numquam sint labore veritatis voluptatum reprehenderit
            cupiditate odit molestias, iste natus, vero id deserunt! Nemo
            labore, consequatur quisquam debitis eius, iusto quibusdam
            voluptatem aut quasi maxime dicta incidunt sint.
          </p>
        </div>

        <div className="thirdSection">
          <ul className="footerUL">
            <h3>CONTACT US</h3>

            <li>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
              info@thewoodfactory.net
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
              {phoneNumbers.join(", ")}
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} className="icon" /> @ 2024 Tier
              Inc. All rights reserved
            </li>
          </ul>
        </div>

        <div className="secSection">
          <ul className="footerUL">
            <h3>USEFUL LINKS</h3>

            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="fourthSection">
          <ul className="showrooms footerUL">
            <div className="showroomHeading">
              <h3>PHYSICAL SHOWROOMS</h3>
            </div>
            <div className="showroomLists">
              <li>
                <h3>Lagos</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur <br />
                  adipisicing elit. Ea, quasi?
                </p>
              </li>

              <li>
                <h3>Accra</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur
                  <br /> adipisicing elit. Ea, quasi?
                </p>
              </li>

              <li>
                <h3>Nairobi</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur <br />
                  adipisicing elit. Ea, quasi?
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
