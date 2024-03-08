import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Login.css";

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
    <div className="loginForm">
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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
