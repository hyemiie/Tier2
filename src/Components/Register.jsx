import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Login.css";
import Footer from "./Footer";
import CustomAlert from "./CustomAlert";
import { useNavigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate()

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    setAlertMessage('');
  };
  const handleRegisteration = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    axios
      .post("https://tierfrontend2.onrender.com/register", data)
      .then(() => {
        console.log("User Registered");
        showAlert("Registeration successful");
        // Update UI with success message, if needed
      })
      navigate("/login")
      .catch((error) => {
        console.error(error);
        showAlert("Registeration failed", error);

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
        {alertVisible && (
        <CustomAlert message={alertMessage} onClose={handleAlertClose} />
      )}
      <div className="contactForm">
        <div className="contactFormHalf">
          
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
