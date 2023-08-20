//import React from 'react';
import React, { useState } from 'react';
import { Wrapper } from '../viewAttendance/style';

const ViewAttendance = ({ studentUsers, attendanceData })=> {
  const [selectedUser, setSelectedUser] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    const selectedUserData = studentUsers.find(user => user.username === e.target.value);
    setAttendanceRecords(selectedUserData ? attendanceData[selectedUserData.username] || [] : []);
  };

  return (
    <Wrapper>
      <h3>View Attendance</h3>
      <div>
        <label>Select Student:</label>
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">Select a student</option>
          {studentUsers.map(user => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      <div>
        {attendanceRecords.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No attendance data available.</p>
        )}
      </div>
    </Wrapper>
  );
}

export default ViewAttendance;

