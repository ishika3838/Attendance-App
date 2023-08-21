import React, { useState } from 'react';
import ViewAttendance from '../viewAttendance';
import { Wrapper } from './style';
function Faculty({ users ,setSelectedRole }) {
  const [attendanceData, setAttendanceData] = useState({});
  const [selectedBranch,setselectedBranch]=useState('');
  const [selectedSection , setselectedSection] = useState('')
  const [selectedSubject , setselectedSubject] = useState('')
// Filter out faculty users from the list
  const studentUsers = users.filter(user => user.role === 'student' && user.branch === selectedBranch && user.section === selectedSection);
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
     <div>
              <div className="input">
              
                <select
                  value={selectedSubject}
                  onChange={(e) => setselectedSubject(e.target.value)}
                >
                  <option value="" selected disabled>
                    --Select Subject--
                  </option>
                  <option value="Dbms">Dbms</option>
                  <option value="Oops">Oops</option>
                </select>
              </div>

              <div className="input">
                
                <select
                  value={selectedBranch}
                  onChange={(e) =>setselectedBranch(e.target.value)}
                >
                  <option value="" selected disabled>
                    --Select Branch--
                  </option>
                  <option value="Computer Science Engineering">Computer Science Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                </select>
              </div>

              <div className="input">
                
                <select value={selectedSection} onChange={(e) => setselectedSection(e.target.value)}>
                  <option value="" selected disabled>
                    --Select Section--
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>
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


