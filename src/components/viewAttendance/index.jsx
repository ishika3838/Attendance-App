// // // // 
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';

// const ViewAttendance = () => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   useEffect(() => {
//     services.user.getAttendance()
//       .then(res => {
//         setAttendanceData(res.data);
//       })
//       .catch(error => {
//         console.error('Error fetching attendance data:', error);
//       });
//   }, []);

//   const getAttendanceStatus = (studentId) => {
//     const studentAttendance = attendanceData.find(item => item.studentId === studentId);

//     if (studentAttendance) {
//       const { sectionId, subjectId, date } = studentAttendance;
//       // Replace 'YOUR_SELECTED_SECTION_ID' and 'YOUR_SELECTED_SUBJECT_ID' with actual values
//       if (sectionId === 'YOUR_SELECTED_SECTION_ID' && subjectId === 'YOUR_SELECTED_SUBJECT_ID') {
//         return date === 'true' ? 'Present' : 'Absent';
//       }
//     }

//     return 'Absent';
//   };

//   return (
//     <div className="view-attendance">
//       <h2>View Attendance List</h2>
//       {attendanceData.map(item => (
//         <div className="attendance-row" key={item.studentId}>
//           <p>{item.studentName}</p>
//           <p>{getAttendanceStatus(item.studentId)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewAttendance;



