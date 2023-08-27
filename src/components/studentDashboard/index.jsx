import { slide as Menu } from "react-burger-menu";
import React, { useState, useEffect } from "react";
import ProfileCompletionForm from "../profileCompletionForm";
import { Wrapper } from "./style";
import StudentProfile from "../studentProfile";
import { Link } from "react-router-dom";
const StudentDashboard = ({ setSelectedRole, user }) => {
  const [profileComplete, setProfileComplete] = useState(
    localStorage.getItem("profileCompleted") === "true"
  );
  const [studentData, setStudentData] = useState({});
  const [showProfileForm, setShowProfileForm] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("USER"))
        window.location = "/";
  }, []);

  const handleProfileFormSubmit = (updatedData) => {
    setStudentData(updatedData);
    setProfileComplete(true);
    setShowProfileForm(false);
    localStorage.setItem("profileCompleted", "true");
  };

  const renderProfileForm = () => {
    return <ProfileCompletionForm onUpdate={handleProfileFormSubmit} />;
  };
  const handleLogout = () => {
    setSelectedRole("");
    localStorage.removeItem("profileCompleted");
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Wrapper>
      {/* hambourgour menu bar */}
      <h2>Student Dashboard</h2>
      <Menu left>
        <Link to="/my-profile">My Profile</Link>
        <Link to="/view-attendance">View Attendance</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Menu>

      <div className="innerContainer">
        <h3>Welcome to AttendEase</h3>
        {/* checking if user profile is complete or not  */}
        {!profileComplete ? (
          <>
            <p>Update your profile:</p>
            {showProfileForm ? (
              renderProfileForm()
            ) : (
              <button onClick={() => setShowProfileForm(true)}>
                Complete Profile
              </button>
            )}
          </>
        ) : (
          <StudentProfile user={user} studentData={studentData} />
        )}
      </div>
    </Wrapper>
  );
};

export default StudentDashboard;
