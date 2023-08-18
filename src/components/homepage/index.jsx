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
      <h2>Welcome to AttendEase</h2>
      <p>Select your role:</p>
      <div>
        <button onClick={() => handleRoleClick("student") }>
          Student
          <img src="https://img.icons8.com/ios-glyphs/90/user--v1.png" alt="Student" />
        </button>
        <button onClick={() => handleRoleClick("faculty")}>
          Faculty
          <img src="https://img.icons8.com/ios-glyphs/90/user--v1.png" alt="Faculty" />
        </button>
      </div>
     
    </Wrapper>
  );
};

export default Homepage;