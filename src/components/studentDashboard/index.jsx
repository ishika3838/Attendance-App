import { slide as Menu } from 'react-burger-menu';
import React, {  useState } from 'react';
import ProfileCompletionForm from '../profileCompletionForm';

import { Wrapper } from './style';
import StudentProfile from '../studentProfile';
//import StudentProfile from '../studentProfile';
// const StudentDashboard = ({setSelectedRole,user}) => {
  
//   const [studentData, setStudentData] = useState(null);
//   const handleProfileUpdate = (updatedData) => {
//     setStudentData(updatedData);
    
//   };
//   useEffect(() => {
//     if (user) {
//       // Fetch the user's data using the unique identifier (e.g., contact, username)
//       services.user.read({ contact: user.contact })
//         .then(res => {
//           const student = res.data.find(user => user.role === "student" && user.contact === user.contact);
//           console.log(res.data.student);

//         })
//         .catch(error => {
//           console.error('Error fetching student data:', error);
//         });
//     }
//   }, [user]);

//   const handleLogout =()=>{
//         setSelectedRole('');
//         window.location='/';
//       }
//   return (
//     <Wrapper>
//       <h2>Student Dashboard</h2>
//        <Menu left>
//          <a href="#student-profile" >My Profile</a>
//          <a href="#mark-attendance"></a>
//          <a href="#view-attendance">View Attendance</a>
//          <a href="#feedback">Feedback</a>
//          <a href="#logout" onClick={handleLogout}>Logout</a>
//       </Menu>
   
//       {studentData ? (
//         <>
//           <h1>welcome {user.name}</h1>
//           <p>to out AttendEase App</p>
//           {/* Display other dashboard components */}
//         </>
//       ) : (
//         <ProfileCompletionForm user={user} onUpdate={handleProfileUpdate} />
//       )}
//     </Wrapper>
//   );
// };

// export default StudentDashboard;
//import React from 'react';

// import { Wrapper } from './style';
// //import { services } from '../services';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { services } from '../../services';
//import ProfileCompletionForm from '../profileCompletionForm';

 const StudentDashboard=({ setSelectedRole ,user})=> {
 
    
  const [profileComplete, setProfileComplete] = useState( localStorage.getItem('profileCompleted') === 'true');
  const [studentData, setStudentData] = useState({});
  const [showProfileForm, setShowProfileForm] = useState(false);
 

  const handleProfileFormSubmit = (updatedData) => {
    
    setStudentData(updatedData);
    setProfileComplete(true);
    setShowProfileForm(false);
    localStorage.setItem('profileCompleted', 'true');
   
   
  };

  const renderProfileForm = () => {
    return (
      <ProfileCompletionForm
       
        onUpdate={handleProfileFormSubmit}
      />
    );
  };
  const handleLogout =()=>{
    setSelectedRole('');
    localStorage.removeItem('profileCompleted');
    localStorage.clear();
    window.location='/';
  }
  return (
    <Wrapper>
      <h2>Student Dashboard</h2>
      <Menu left>
        <a href="#student-profile">My Profile</a>
        <a href="#mark-attendance"></a>
        <a href="#view-attendance">View Attendance</a>
        <a href="#feedback">Feedback</a>
        <a href="#logout" onClick={handleLogout}>Logout</a>
      </Menu>
      
      <div className='profile'>
      <h3>Welcome to AttendEase</h3>
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
        <StudentProfile user={user}/>
      )}
      
    </div>
  
    </Wrapper>
  );
}

export default StudentDashboard;