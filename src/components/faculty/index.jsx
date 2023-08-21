import React, { useState } from "react";
import ViewAttendance from "../viewAttendance";
import { Wrapper } from "./style";

function Faculty({ users, setSelectedRole }) {
 // console.log(users)
  const [attendanceData, setAttendanceData] = useState({});
  const [selectedSubject,setSelectedSubject] = useState('');
  const [selectedBranch,setSelectedBranch] = useState('');
  const [selectedSection,setSelectedSection] = useState('');
  // Filter out faculty users from the list
  const studentUsers = users.filter((user) => user.role === "student"&& user.branch === selectedBranch &&
   user.section === selectedSection);
  // const filteredStudentUsers = users.filter((user) =>
  
  //   user.role === 'student' &&
  //   user.branch === selectedBranch &&
  //   user.section === selectedSection
  // );
  const markAttendance = (username, status) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedAttendance = {
      ...attendanceData,
      [username]: [...(attendanceData[username] || []), { date: currentDate, status }],
    };
    console.log(updatedAttendance);
    setAttendanceData(updatedAttendance);

    localStorage.setItem('attendanceData', JSON.stringify(updatedAttendance));
  };
  
    
  //   const updatedAttendance = {
  //     ...attendanceData,
  //     [username]: [
  //       ...(attendanceData[username] || []),
  //       { date: currentDate, status },
  //     ],
  //   };
  //   setAttendanceData(updatedAttendance);
  //   console.log(updatedAttendance);

  //   // Store updated attendance data in local storage
  //   localStorage.setItem("attendanceData", JSON.stringify(updatedAttendance));
  // };
  const handleLogout = () => {
    setSelectedRole("");
    window.location = "/";
  };

  return (
    <Wrapper>
      <h2>Faculty Dashboard</h2>
      <div>
        <label>
          Select Subject:
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="DBMS">DBMS</option>
            <option value="OOPS">OOPS</option>
            {/* Add options for subjects */}
          </select>
        </label>
        <label>
          Select Branch:
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            <option value="Computer Science Engineering">Computer Science Engineering</option>
            <option value="Information Technology">Information Technology</option>
            {/* Add options for branches */}
          </select>
        </label>
        <label>
          Select Section:
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            {/* Add options for sections */}
          </select>
        </label>
      </div>
      <h3>Mark Attendance</h3>
      {studentUsers.map((u) => (
        <div key={u.username}>
          <p>{u.username}</p>
          <button
            className="green-button"
            onClick={() => markAttendance(u.username, "Present")}
          >
            Present
          </button>
          <button
            className="red-button"
            onClick={() => markAttendance(u.username, "Absent")}
          >
            Absent
          </button>
        </div>
      ))}
      <ViewAttendance
        studentUsers={studentUsers}
        attendanceData={attendanceData}
      />
      <button type="submit" onClick={handleLogout}>
        logout
      </button>
    </Wrapper>
  );
}

export default Faculty;
