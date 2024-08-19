import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomAlert from "./CustomAlert";


function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    setAlertMessage('');
  };
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://tierfrontend2.onrender.com/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      localStorage.removeItem("access_token"); // Clear token from local storage
      setIsLoggedOut(true);
      showAlert('Logged Out successfully')
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

  return ( 
  <div>
      {alertVisible && (
        <CustomAlert message={alertMessage} onClose={handleAlertClose} />
      )}
      <button onClick={handleLogout}>Logout</button>;

  </div>
)}

export default Logout;
