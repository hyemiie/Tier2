import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Registeration.css";

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
    <div className="registerForm">
      <form method="post">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        <label for="password">Email:</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" onClick={handleRegisteration}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
