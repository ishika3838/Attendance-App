import React from "react";
import {  useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

const Header = ({ selectedRole, setSelectedRole }) => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    navigate("/login");
    setSelectedRole(role);
  };

  return (
    <Wrapper>
      <h2>Welcome to Attendance Management System</h2>
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

export default Header;