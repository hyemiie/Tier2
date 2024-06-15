import React from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
// import "./Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      Password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("access_token", response.data.access_token);
      // Redirect to protected route
      console.log(response.data.access_token);
      alert("Login successful");
    } catch (error) {
      console.error(error);
      // Display error message to user
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
      <div className="contactForm">
        <div className="contactFormHalf">
          <h2>Welcome Back!!</h2>
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
