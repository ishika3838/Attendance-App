
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Wrapper } from './style';
//import { services } from '../services';
//import { useState } from 'react';


 const StudentDashboard=({ userId,setSelectedRole })=> {
  //const [studentProfile, setStudentProfile] = useState(null);

    // useEffect(() => {
    //     // Fetch student profile using the userId
    //     services.user3.getProfile(userId)
    //     .then(response => {
    //         setStudentProfile(response.data);
    //     })
    //     .catch(error => {
    //         console.log("error in getting response");
    //     });
    // }, [userId]);

    // if (!studentProfile) {
    //     return <div>Loading...</div>;
    // }
  const handleLogout =()=>{
    setSelectedRole('');
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
      {/* <p>Welcome! {studentProfile.name}</p>
            <p>Roll Number: {studentProfile.rollNumber}</p>
      <p>Branch: {studentProfile.branch}</p>   */}
      
    </Wrapper>
  );
}

export default StudentDashboard;