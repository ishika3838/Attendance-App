// // // 
import React, { useEffect, useState } from 'react';
import { services } from '../../services';

const ViewAttendance = ({ students }) => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    
    services.user.getAttendance()
      .then(res => {
        setAttendanceData(res.data); 
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
      });
  }, []);

  return (
    <div className="view-attendance">
      <h2>View Attendance List</h2>
      {students.map((students, index) => (
        <div className="attendance-row" key={students.id}>
          <p>{students.name}</p>
          <p>{attendanceData[index] ? 'Present' : 'Absent'}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAttendance;


// import React, { useState, useEffect } from 'react';
// import { services } from '../../services';

// const ViewAttendance = ({students,attendance}) => {
  
//   const [attendanceData, setAttendanceData] = useState([]);
//   const studentsWithAttendance = students.filter(student =>
//         attendanceData.hasOwnProperty(student.username)
//       );
//       console.log('Attendance Data State:', attendance);
//   useEffect(() => {
//     // Fetch attendance data based on selectedDate and selectedSubject
    
//       services.user.getAttendance()
//         .then(res => {
//           setAttendanceData(res.data);
//           console.log(res.data);
//         })
//         .catch(error => {
//           console.error('Error fetching attendance data:', error);
//         });
    
//   }, []);

//   return (
//     <div className="view-attendance">
//       <h2>View Attendance</h2>
//       {studentsWithAttendance.length === 0 ? (
//         <p>No attendance data available.</p>
//       ) : (
//         <div>
//           <p>Attendance data available for:</p>
//           <ul>
//             {studentsWithAttendance.map(student => (
//               <li key={student.username}>{student.username}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       </div>
//   );
// };

// export default ViewAttendance;

// import React from 'react';
// function ViewAttendance({ studentUsers, attendanceData }) {
//   // Filter student users who have attendance data
//   

//    // Log attendance data to console for debugging

//   return (
//     <div>
//       <h3>View Attendance</h3>
//       {studentsWithAttendance.length === 0 ? (
//         <p>No attendance data available.</p>
//       ) : (
//         <div>
//           <p>Attendance data available for:</p>
//           <ul>
//             {studentsWithAttendance.map(student => (
//               <li key={student.username}>{student.username}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
// export default ViewAttendance;

// // function ViewAttendance({ studentUsers, attendanceData }) {
// //   return (
// //     <div>
// //       <h3>View Attendance</h3>
// //       <ul>
// //         {studentUsers.map(user => (
// //           <li key={user.username}>
// //             <p>{user.username}</p>
// //             <ul>
// //               {attendanceData[user.username]?.map(attendance => (
// //                 <li key={attendance.date}>
// //                   {attendance.date}: {attendance.status}
// //                 </li>
// //               ))}
// //             </ul>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }



// import React from 'react';
// import StudentAttendance from '../studentattendance';

// function ViewAttendance({studentUsers, attendanceData }) {
//   // Filter student users who have attendance data
//   const studentsWithAttendance = studentUsers.filter(student =>
//     attendanceData.hasOwnProperty(student.username)
//   );

//   return (
//     <div>
//       <h3>View Attendance</h3>
//       {studentsWithAttendance.length === 0 ? (
//         <p>No attendance data available.</p>
//       ) : (
//         studentsWithAttendance.map((student) => (
//           <StudentAttendance key={student.username} student={student} attendanceData={attendanceData} />
//         ))
//       )}
//     </div>
//   );
//         }
//   export default ViewAttendance;

// // function getAttendanceStatus(username, attendanceData) {
// //   const studentAttendance = attendanceData[username];
// //   if (!studentAttendance || studentAttendance.length === 0) {
// //     return 'Not Marked';
// //   }
// //   const latestAttendance = studentAttendance[studentAttendance.length - 1];
// //   return latestAttendance.status;
// // }
// // export default ViewAttendance;
// import React, { useState } from 'react';
// import { Wrapper } from '../viewAttendance/style';

// const ViewAttendance = ({ studentUsers, attendanceData })=> {
//   const [selectedUser, setSelectedUser] = useState('');
//   const [attendanceRecords, setAttendanceRecords] = useState([]);

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//     const selectedUserData = studentUsers.find(user => user.username === e.target.value);
//     setAttendanceRecords(selectedUserData ? attendanceData[selectedUserData.username] || [] : []);
//   };

//   return (
//     <Wrapper>
//       <h3>View Attendance</h3>
//       <div>
//         <label>Select Student:</label>
//         <select value={selectedUser} onChange={handleUserChange}>
//           <option value="">Select a student</option>
//           {studentUsers.map(user => (
//             <option key={user.username} value={user.username}>
//               {user.username}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         {attendanceRecords.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceRecords.map((record, index) => (
//                 <tr key={index}>
//                   <td>{record.date}</td>
//                   <td>{record.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No attendance data available.</p>
//         )}
//       </div>
//     </Wrapper>
//   );
// }
// export default ViewAttendance;


