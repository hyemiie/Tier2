import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import image from "./09/undraw_bug_fixing_oc-7-a.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faBiking,
  faCommentDollar,
  faLaptop,
  faPencil,
  faTrash,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Profile() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get_name", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setName(response.data.name);

        setName(response.data.name);
        console.log("name", name);
      } catch (error) {
      } finally {
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <div className="profilePage">
        <div className="profileName">Welcome Back {name} !!!</div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
