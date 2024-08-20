import React from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contactsUs">
      <div className="contactFormDiv">
    
          <form method="post" className="contactSpan">
            <div className="firstCDiv">
              <span className="label">
                <input type="text" name="" id="contactInput" placeholder="Name" />
              </span>
              <span className="label">
                <input type="email" name="" id="contactInput" placeholder="Your email" />
              </span>
              <span className="label">
              <input
                type="text"
                required
                className="contactInput2"
                placeholder="Message"
              />
            </span>
            </div>
            <button type="submit" className="contactFBtn">
            Submit
          </button>
          </form>
        
      </div>
      <Footer/>

    </div>
  );
};

export default Contact;
