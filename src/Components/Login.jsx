import React from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import CustomAlert from "./CustomAlert";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      Password: password,
    };

    try {
      const response = await axios.post("https://tierfrontend2.onrender.com/login", {
        username,
        password,
      });
      localStorage.setItem("access_token", response.data.access_token);
      console.log(response.data.access_token);
      showAlert("Login successful");
      navigate('/')
    } catch (error) {
      console.error(error);
      showAlert("Login failed", error);

    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
          <h2 className="formTitle">Log in to your account</h2>
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
          <button type="submit" className="contactBtn" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
      <Footer />
      
    </div>
  );

  // return (
  //   <div className="loginForm">
  //     <div className="form">
  //       <div className="formHalf">
  //         Welcome Backk!!
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
  //           veniam odio nulla laborum numquam nihil iure expedita et aliquid
  //           explicabo!
  //         </p>
  //       </div>
  //       <div className="formHalf2">
  //         <form method="post">
  //           <span className="label">
  //             <label for="username">Your Username</label>
  //             <input
  //               name="username"
  //               required
  //               value={username}
  //               onChange={handleUsernameChange}
  //               className="loginInput"
  //             />
  //           </span>
  //           <span className="label">
  //             <label for="password">Your Password</label>
  //             <input
  //               type="password"
  //               name="password"
  //               required
  //               value={password}
  //               onChange={handlePasswordChange}
  //               className="loginInput"
  //             />
  //           </span>
  //           <span className="label">
  //             <label for="password">Your Password</label>
  //             <input
  //               type="password"
  //               name="password"
  //               required
  //               value={password}
  //               onChange={handlePasswordChange}
  //               className="loginInput"
  //             />
  //           </span>
  //         </form>
  //         <button type="submit" onClick={handleLogin} className="formButton">
  //           Login
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Login;
