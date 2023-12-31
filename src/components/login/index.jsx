import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./style";
import { services } from "../../services";
import contact_icon from "../assets/phone-call.png";
import password_icon from "../assets/padlock_icon.png";

const Login = ({ role }) => {
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Logging in with:", contact, password);
    e.target.disabled = "true";
   //Api call to read the login details .
    services.user
      .login({
        contact,
        password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(role);

        console.log(response.data.user.role);
        alert("Logged In Succesfully ");
        //On basis of role navigating them
        if (response.data.user.role === "student") {
          window.localStorage.setItem( "USER", JSON.stringify(response.data.user));
          
          navigate("/studentdashboard");
        } else {
          navigate("/facultydashboard");
        }
        window.localStorage.setItem("USER", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error("Error in login user:", error);
        alert("Login failed. Please check your credentials.");
      })
      .finally(() => {
        e.target.disabled = "false";
        setPassword("");
        setContact("");
      });

    };

    
  
  return (
    <Wrapper className="maincontainer">
      <div className="container">
        <div className="header">
          <h1>AttendEase</h1>
        </div>
        <div className="underline"></div>
        <h2>Login</h2>

          <div className="inputs">
        <form onSubmit={handleSubmit}>
            <div className="input">
              <img src={contact_icon} alt="contact_icon" />
              <input
                type="text"
                placeholder="Contact"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="password_icon" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link className="forgot" to="/resetPassword">
              Forgot Password ?
            </Link>
            <div className="button">
            <button type="submit">Login</button>
            </div>

        </form>
          </div>
        <p>
          Not registered yet? 
          <Link className="register" to="/home"> Register Here</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;
