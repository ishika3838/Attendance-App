import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./style";
import user_icon from "../assets/user_icon.png";
import contact_icon from "../assets/phone-call.png";
import pass from "../assets/padlock_icon.png";
// import confirm_pass from "../assets/confirm_pass.png";
//import rollnum from "../assets/id.png";
//import year_icon from "../assets/year.png";
//import profile_icon from "../assets/image-gallery.png";
//import branch_icon from "../assets/branch_icon.png";
//import sec from "../assets/section.png";
//import sub_icon from "../assets/subject.png";

const Register = ({ handleRegister, role, setSelectedRole }) => {
  const [name, setname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
 


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const user = {
      name,
      password,
      contact,
      role: role,
      
      
      attendance: [],
    };

    e.target.value = "registering";
    e.target.disabled = "true";
    axios
      .post("https://quizattendace.onrender.com/api/user/add", {
        name,
        contact,
        password,
        role,
        
        
      })
      .then((response) => {
        console.log(response.data);
        console.log(role);
        alert("successfully registered");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      })
      .finally(() => {
        e.target.value = "signup";
        e.target.disabled = "false";
        setname("");
        setContact("");
        setPassword("");
        setSelectedRole("");
      
      
      });

    handleRegister(user);

    setname("");
    setPassword("");
    setConfirmPassword("");
    
    alert("Registration successful! Please proceed to login.");
    navigate("/");
  };

  return (
    <Wrapper className="maincontainer">
      <div className="container">
        {role=== "student" &&(<h2>Student Registration</h2>) }
        
        {role=== "faculty" &&(<h2>Faculty  Registration</h2>) }
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={user_icon} alt="user_icon" />
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={contact_icon} alt="contact_icon" />
            <input
              type="text"
              required
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={pass} alt="password_icon" />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={pass} alt="password_icon" />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          
          <button type="submit">Register</button>


        </form>
        <p>Already registered <Link to="/">Click Here</Link> </p>
      </div>
    </Wrapper>
  );
};

export default Register;
