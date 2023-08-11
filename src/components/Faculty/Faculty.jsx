import React, { useState } from 'react';
import ViewAttendance from '../ViewAttendance/ViewAttendance';

function Faculty({ users, handleLogout }) {
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
  return (
    <div>
      <h2>Faculty Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Mark Attendance</h3>
      {studentUsers.map(u => (
        <div key={u.username}>
          <p>{u.username}</p>
          <button onClick={() => markAttendance(u.username, 'Present')}>Present</button>
          <button onClick={() => markAttendance(u.username, 'Absent')}>Absent</button>
        </div>
      ))}
      <ViewAttendance studentUsers={studentUsers} attendanceData={attendanceData} />
    </div>
  );
}

export default Faculty;


