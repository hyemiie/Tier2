import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Login.css";
import Footer from "./Footer";

function Register() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleRegisteration = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:5000/register", data)
      .then(() => {
        console.log("User Registered");
        alert("Registeration Successful");
        // Update UI with success message, if needed
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(username);
    console.log(password);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="contactUs">
      <div className="contactForm">
        <div className="contactFormHalf">
          <h2>Welcome!!!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quisquam veniam odio nulla laborum numquam
            <br /> nihil iure expedita et aliquid explicabo!
          </p>
        </div>
        <div className="contactDiv">
          <form method="post" className="contactSpan">
            <span className="label">
              <input
                type="text"
                id=""
                placeholder="Name"
                name="username"
                required
                value={username}
                onChange={handleUsernameChange}
                className="username"
              />
            </span>
            <span className="label">
              <input
                type="text"
                id=""
                placeholder="Your email"
                className="username"
              />
            </span>
            <span className="label">
              <input
                type="password"
                required
                className="contactInput password"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </span>
          </form>
          <button
            type="submit"
            className="contactBtn"
            onClick={handleRegisteration}
          >
            Register{" "}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
