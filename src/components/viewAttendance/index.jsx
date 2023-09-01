// // import React, { useEffect, useState } from 'react';
// // import { services } from '../../services';

// // const ViewAttendance = ({ sectionId, subjectId }) => {
// //   const [attendanceData, setAttendanceData] = useState([]);

// //   useEffect(() => {
// //     services.user.getAttendance()
// //       .then(res => {
// //         const sectionData = res.data[sectionId];
// //         if (sectionData && sectionData[subjectId]) {
// //           setAttendanceData(sectionData[subjectId]);
// //         } else {
// //           console.log('No attendance data available for this section and subject.');
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error fetching attendance data:', error);
// //       });
// //   }, [sectionId, subjectId]);

// //   return (
// //     <div className="view-attendance">
// //       <h2>View Attendance List</h2>
// //       {Object.keys(attendanceData).map(date => (
// //         <div className="attendance-row" key={date}>
// //           <p>{date}</p>
// //           <p>{attendanceData[date][0] ? 'Present' : 'Absent'}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ViewAttendance;

// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';

// const ViewAttendance = ({ sectionId, subjectId }) => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   useEffect(() => {
//     services.user.getAttendance()
//       .then(res => {
//         const sectionData = res.data[sectionId];
//         if (sectionData && sectionData[subjectId]) {
//           setAttendanceData(sectionData[subjectId]);
//         } else {
//           console.log('No attendance data available for this section and subject.');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching attendance data:', error);
//       });
//   }, [sectionId, subjectId]);

//   return (
//     <div className="view-attendance">
//       <h2>View Attendance List</h2>
//       {Object.keys(attendanceData).map(date => (
//         <div className="attendance-row" key={date}>
//           <p>{date}</p>
//           {attendanceData[date].map((attendance, index) => (
//             <div key={index}>
//               <p>{attendance.username}</p>
//               <p>{attendance.status ? 'Present' : 'Absent'}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewAttendance;
// import React, { useEffect, useState } from "react";
// import { services } from "../../services";


// const ViewAttendance = ({ sectionId, subjectId, students }) => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   useEffect(() => {
//     // Call the API to get attendance data
//     services.user
//       .getAttendance()
//       .then((res) => {
//         setAttendanceData(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching attendance data:", error);
//       });
//   }, []);
//   const convertTimestampToDate = (timestamp) => {
//     const date = new Date(parseInt(timestamp, 10));
//     return date.toLocaleString(); // Convert to readable date format
//   };

//   return (
//     <div>
//       <h1>View Attendance List</h1>
//       <div className="underline"></div>
//       <div className="inner">
//         {attendanceData[sectionId] &&
//           attendanceData[sectionId][subjectId] &&
//           Object.entries(attendanceData[sectionId][subjectId]).map(
//             ([date, attendance], index) => (
//               <div className="attendance-row" key={index}>
//                 <p>Date: {date.toString()}</p>
//                 {attendance.map((status, studentIndex) => (
//   <div key={studentIndex}>
//     {students[studentIndex] ? (
//       <>
//         <p>name: {students[studentIndex].name}</p>
//         <p>rollno: {students[studentIndex].rollno}</p>
//         <p>status: {status ? "Present" : "Absent"}</p>
//       </>
//     ) : (
//       <p>Student data not available</p>
//     )}
//   </div>
// ))}
//               </div>
//             )
//           )}
//       </div>
//       </div>
//   );
// };

// export default ViewAttendance;
import React, { useEffect, useState } from "react";
import { services } from "../../services";

const ViewAttendance = ({sectionId,subjectId,students}) => {
  

 
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Call the API to get attendance data
    services.user
      .getAttendance()
      .then((res) => {
        setAttendanceData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching attendance data:", error);
      });
  }, [sectionId,subjectId]);

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(parseInt(timestamp, 10));
    return date.toLocaleDateString(); // Convert to readable date format
  };
 

 
  return (
    <div>
      <h1>View Attendance List</h1>
      <div className="underline"></div>
      <div className="inner">
        {attendanceData[sectionId] &&
          attendanceData[sectionId][subjectId] &&
          Object.entries(attendanceData[sectionId][subjectId]).map(
            ([timestamp, attendance], index) => (
              <div className="attendance-row" key={index}>
                <p>Date: {convertTimestampToDate(timestamp)}</p>
                {attendance.map((status, studentIndex) => (
                  <div key={studentIndex}>
                    {students[studentIndex] ? (
                      <>
                        <p>name: {students[studentIndex].name}</p>
                        <p>rollno: {students[studentIndex].rollno}</p>
                        <p>status: {status ? "Present" : "Absent"}</p>
                      </>
                    ) : (
                      <p>Student data not available</p>
                    )}
                  </div>
                ))}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ViewAttendance;
