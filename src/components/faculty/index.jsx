import React, { useState } from 'react';
import ViewAttendance from '../viewAttendance';
import { Wrapper } from './style';
function Faculty({ users ,setSelectedRole }) {
  const [attendanceData, setAttendanceData] = useState({});
// Filter out faculty users from the list
  const studentUsers = users.filter(user => user.role === 'student');
  const markAttendance = (username, status) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const updatedAttendance = {
      ...attendanceData,
      [username]: [...(attendanceData[username] || []), { date: currentDate, status }],
    };
    setAttendanceData(updatedAttendance);
    console.log(updatedAttendance);

  // Store updated attendance data in local storage
    localStorage.setItem('attendanceData', JSON.stringify(updatedAttendance));
    
  };
  const handleLogout =()=>{
    setSelectedRole('');
    window.location='/';
  }

  return (
       <Wrapper>
     <h2>Faculty Dashboard</h2>
     
      <h3>Mark Attendance</h3>
      {studentUsers.map(u => (
        <div key={u.username}>
          <p>{u.username}</p>
          <button className="green-button" onClick={() => markAttendance(u.username, 'Present')}>Present</button>
          <button className="red-button"onClick={() => markAttendance(u.username, 'Absent')}>Absent</button>
        </div>
      ))}
      <ViewAttendance studentUsers={studentUsers} attendanceData={attendanceData} />
      <button type="submit" onClick={handleLogout}>logout</button>
      </Wrapper>
  );
}

export default Faculty;


