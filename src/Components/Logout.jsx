import React, { useState, useEffect } from "react";
import axios from "axios";

function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      localStorage.removeItem("access_token"); // Clear token from local storage
      setIsLoggedOut(true);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error appropriately, e.g., display an error message
    }
  };

  useEffect(() => {
    if (isLoggedOut) {
      // Redirect to login page or desired location after logout
      window.location.href = "/login";
    }
  }, [isLoggedOut]);

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
