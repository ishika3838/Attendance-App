import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./style";
import user_icon from "../assets/user_icon.png";
import contact_icon from "../assets/phone-call.png";
import pass from "../assets/padlock_icon.png";
import sect from "../assets/section.png"
const Register = ({ handleRegister, role, setSelectedRole }) => {
  const [name, setname] = useState("");
  const [contact, setContact] = useState("");
  const [section, setSection] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if both password are equal
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
     
    const user = {
      name,
      password,
      contact,
      section,
      role: role,
    };
    e.target.disabled = "true";
    //api call to add the details of user 
    axios
      .post("https://quizattendace.onrender.com/api/user/add", {
        name,
        contact,
        section,
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
        e.target.disabled = "false";
        setname("");
        setContact("");
        setSection("");
        setPassword("");
        setSelectedRole("");
      });

    handleRegister(user);//to add multiple user
    setname("");
    setContact("");
    setSection("");
    setPassword("");
    setConfirmPassword("");
    setSelectedRole("");
    alert("Registration successful! Please proceed to login.");
    navigate("/");
  };

  return (
    <Wrapper className="maincontainer">
      <div className="container">
        {/* created register form for student and faculty  */}
        {role === "student" && <h2>Student Registration</h2>}

        {role === "faculty" && <h2>Faculty Registration</h2>}
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
        {role === "student" && (
        <div className="input">
          <img src={sect} alt="section_icon" />
          <select
            id="sections"
            value={section}
            name="section"
            onChange={(e) => setSection(e.target.value)}
          >

            <option value="" selected disabled>
              --Select Section--
            </option>
            <option value="CS-I-A">CS-I-A</option>
            <option value="CS-II-A">CS-II-A</option>
            <option value="CS-III-A">CS-III-A</option>
            <option value="CS-IV-A">CS-IV-A</option>
            <option value="IT-I-A">IT-I-A</option>
            <option value="ME-I-A">ME-I-A</option>
            <option value="ME-II-A">ME-II-A</option>
            <option value="ME-III-A">ME-III-A</option>
            <option value="ME-IV-A">ME-IV-A</option>
            <option value="EC-I-A">EC-I-A</option>
            <option value="EC-II-A">EC-II-A</option>
            <option value="EC-III-A">EC-III-A</option>
            <option value="EC-IV-A">EC-IV-A</option>

          </select>
        </div>
      )}
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
 
          <button type="submit" >Register</button>
        </form>
        <p>
          Already registered <Link to="/"> Click Here</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Register;
