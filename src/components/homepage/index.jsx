import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

import user_icon from "../assets/user_icon_empty.png";

const Homepage = ({ selectedRole, setSelectedRole }) => {
  const navigate = useNavigate();

  const handleRoleClick = (selectedRole) => {
    setSelectedRole(selectedRole);
    console.log(selectedRole);
    navigate(`/register`);
  };

  return (
    <Wrapper className="maincontainer">
      <div className="container">
        <div className="header">
          <h2>Welcome to AttendEase</h2>
          <div className="underline"></div>
          <p>Select Your Role</p>
        </div>
        <div className="main">
          <button onClick={() => handleRoleClick("student")}>
            <img src={user_icon} alt="Student" />
            <h1>Student</h1>
          </button>
        </div>
        <div className="main">
          <button onClick={() => handleRoleClick("faculty")}>
            <img src={user_icon} alt="Faculty" />
            <h1>Faculty</h1>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;
