// import { slide as Menu } from "react-burger-menu";
// import React, { useState, useEffect } from "react";
// import ProfileCompletionForm from "../profileCompletionForm";
// import { Wrapper } from "./style";
// import StudentProfile from "../studentProfile";
// import { Link } from "react-router-dom";
// const StudentDashboard = ({ setSelectedRole, user }) => {
//   const [profileComplete, setProfileComplete] = useState(
//     localStorage.getItem("profileCompleted") === "true"
//   );
//   const [studentData, setStudentData] = useState({});
//   const [showProfileForm, setShowProfileForm] = useState(false);
//   useEffect(() => {
//     if (!localStorage.getItem("USER"))
//         window.location = "/";
//   }, []);
  
//   const handleProfileFormSubmit = (updatedData) => {
//     setStudentData(updatedData);
//     setProfileComplete(true);
//     setShowProfileForm(false);
//     localStorage.setItem("profileCompleted", "true");
//   };

//   const renderProfileForm = () => {
//     return <ProfileCompletionForm onUpdate={handleProfileFormSubmit} />;
//   };
//   const handleLogout = () => {
//     setSelectedRole("");
//     localStorage.removeItem("profileCompleted");
//     localStorage.clear();
//     window.location = "/";
//   };
//   return (
//     <Wrapper>
//       {/* hambourgour menu bar */}
//       <h2>Student Dashboard</h2>
//       <Menu left>
//         <Link to="/my-profile">My Profile</Link>
//         <Link to="/student-view">View Attendance</Link>
//         <Link to="/feedback">Feedback</Link>
//         <Link to="/" onClick={handleLogout}>
//           Logout
//         </Link>
//       </Menu>

//       <div className="innerContainer">
        
//         {/* checking if user profile is complete or not  */}
//         {!profileComplete ? (
//           <>
//             <p>Update your profile</p>
//             {showProfileForm ? (
//               renderProfileForm()
//             ) : (
//               <button onClick={() => setShowProfileForm(true)}>
//                 Complete Profile
//               </button>
//             )}
//           </>
//         ) : (
//           <StudentProfile user={user} studentData={studentData} />
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// export default StudentDashboard;
// import { slide as Menu } from "react-burger-menu";
// import React, { useState, useEffect } from "react";
// import { Wrapper } from "./style";
// import { Link } from "react-router-dom";
// import StudentProfile from "../studentProfile";

// const StudentDashboard = ({ setSelectedRole, user, updateUser }) => {
//   const [showProfileForm, setShowProfileForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: user.name || "",
//     contact: user.contact || "",
//     profilePicture: user.profilePicture || "/default-profile-picture.png", // Provide a default profile picture URL
//   });

//   useEffect(() => {
//     if (!localStorage.getItem("USER")) {
//       window.location = "/";
//     }
//   }, []);

//   const handleLogout = () => {
//     setSelectedRole("");
//     localStorage.clear();
//     window.location = "/";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleProfileUpdate = () => {
//     // Assuming you have a function to update the user's profile
//     updateUser(formData); // Pass the updated profile data to this function
//     setShowProfileForm(false); // Hide the profile form after updating
//   };

//   return (
//     <Wrapper>
//       {/* Hamburger menu bar */}
//       <h2>Student Dashboard</h2>
//       <Menu left>
//         <Link to="/my-profile">My Profile</Link>
//         <Link to="/student-view">View Attendance</Link>
//         <Link to="/feedback">Feedback</Link>
//         <Link to="/" onClick={handleLogout}>
//           Logout
//         </Link>
//       </Menu>

//       {/* Display user details */}
//       <div>
//         <StudentProfile user={user}/>
//        </div>
//     </Wrapper>
//   );
// };

// export default StudentDashboard;
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import StudentProfile from "../studentProfile";
import ProfileCompletionForm from "../profileCompletionForm";
import { Wrapper } from "./style";
import userphoto from "../assets/user_icon.png"; // Import your contact icon image
import ProfileIcon from "../profileIcon";

const StudentDashboard = ({ setSelectedRole }) => {
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const currentUser = JSON.parse(window.localStorage.getItem("USER")).contact;
  const handleEditProfileClick = () => {
    setEditMode(true); // Enable edit mode
  };

  const handleViewProfileClick = () => {
    setEditMode(false); // Disable edit mode
  };

  const handleLogout = () => {
    setSelectedRole("");
    localStorage.clear();
    window.location = "/";
  };

  useEffect(() => {
    if (!localStorage.getItem("USER")) window.location = "/";
  }, []);

  return (
    <Wrapper>
       <h2>Student Dashboard</h2>
       <div className="header">
      <Menu left>
      
        <Link to="/my-profile">My Profile</Link>
        <Link to="/student-view">View Attendance</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Menu>
      
        
        <img
          src={ currentUser.photourl || userphoto }
          alt="userphoto"
          className="userphoto"
          onClick={handleEditProfileClick} // Handle edit profile click when the icon is clicked
        />
      </div>

      {editMode ? ( // Conditionally render the ProfileCompletionForm in edit mode
        <div>
          <h3>Edit Profile</h3>
          <ProfileCompletionForm onUpdate={handleViewProfileClick} user={currentUser}/>
        </div>
      ) : (
        // Render the StudentProfile component by default
        <div>
          <h3>Student Profile</h3>
          <StudentProfile user={currentUser} />
        </div>
      )}
    </Wrapper>
  );
};

export default StudentDashboard;


