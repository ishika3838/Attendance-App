import React, { useEffect,useState } from 'react';
import { services } from '../../services';
const StudentProfile=({user})=> {
//  
 // const [ contact,setContact] = useState("");
 const [studentData, setStudentData] = useState(null);
  
 useEffect(() => {
  // Check if student profile data is in local storage
 
  if (user) {
    // Fetch the user's data using the unique identifier (e.g., contact, username)
    services.user.read({ userId: user.userId })
      .then(res => {
        const student = res.data.find(user => user.role === 'student' && user.userId === user.id);
        setStudentData(student);

        
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }
}, [user]);

  return (
    <>
    {studentData && (
    <div>
      
      <h3> Your Profile {studentData.name} !!</h3>
      {studentData.photoUrl && (
        <img width="120" height="120" src={studentData.photoUrl} alt="Profile" />
      )}
      <p>usersname: {studentData.name}</p>
      <p>Section: {studentData.section}</p>
      
      <p>Rollnumber: {studentData.rollno}</p>
      
      </div> )}
      </>
  );
}

export default StudentProfile;
