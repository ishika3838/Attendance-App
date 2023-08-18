import React from "react";
import {  useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

const Homepage = ({ selectedRole, setSelectedRole }) => {
  const navigate = useNavigate();

  const handleRoleClick = (selectedRole) => {
    navigate(`/login`);
    setSelectedRole(selectedRole);
  };

  return (
    <Wrapper>
      <div className="header">

      <h2>Welcome to AttendEase</h2>
      <div className="underline"></div>
      <p>Select Your Role</p>
      </div>
      <div className="main">
        <button onClick={() => handleRoleClick("student") }>
          <img src="https://img.icons8.com/ios-glyphs/90/user--v1.png" alt="Student" />
          <h1>Student</h1>
        </button>
        </div>
        <div className="main">
        <button onClick={() => handleRoleClick("faculty")}>
          <img src="https://img.icons8.com/ios-glyphs/90/user--v1.png" alt="Faculty" />
          <h1>Faculty</h1>
        </button>
      </div>
     
    </Wrapper>
  );
};

export default Homepage;