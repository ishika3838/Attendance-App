// // import React, { useEffect, useState } from 'react';
// // import { services } from '../../services';

// // const StudentAttendanceView = () => {
// //   const [attendanceData, setAttendanceData] = useState({});
// //   const [subjectAttendance, setSubjectAttendance] = useState({});
// //   const [dateAttendance, setDateAttendance] = useState({});

// //   useEffect(() => {
// //     // Fetch the attendance data from the API
// //     services.user.getAttendance()
// //       .then((response) => {
// //         const data = response.data;

// //         // Set the raw attendance data in the state
// //         setAttendanceData(data);

// //         // Filter data for the logged-in student (replace with the actual student ID)
// //         const studentId = window.localStorage.getItem("USER").id;
// //         const studentData = data['CS-II-A']['DBMS'][studentId];

// //         // Calculate subject-wise attendance
// //         const subjectAggregates = {};
// //         Object.keys(data['CS-II-A']).forEach((subject) => {
// //           const subjectData = data['CS-II-A'][subject][studentId];
// //           if (subjectData) {
// //             const presentCount = subjectData.filter((status) => status === true).length;
// //             const totalDays = subjectData.length;
// //             const percentAttendance = (presentCount / totalDays) * 100;
// //             subjectAggregates[subject] = percentAttendance.toFixed(2) + '%';
// //           } else {
// //             subjectAggregates[subject] = 'N/A';
// //           }
// //         });

// //         // Calculate date-wise attendance
// //         const dateAggregates = {};
// //         Object.keys(studentData).forEach((date) => {
// //           const presentCount = studentData[date].filter((status) => status === true).length;
// //           const totalSubjects = Object.keys(studentData[date]).length;
// //           const percentAttendance = (presentCount / totalSubjects) * 100;
// //           dateAggregates[date] = percentAttendance.toFixed(2) + '%';
// //         });

// //         // Set subject-wise and date-wise attendance in the state
// //         setSubjectAttendance(subjectAggregates);
// //         setDateAttendance(dateAggregates);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching attendance data:', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Student Attendance View</h1>

// //       <h2>Subject-wise Attendance</h2>
// //       <ul>
// //         {Object.entries(subjectAttendance).map(([subject, percent]) => (
// //           <li key={subject}>
// //             {subject}: {percent}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Date-wise Attendance</h2>
// //       <ul>
// //         {Object.entries(dateAttendance).map(([date, percent]) => (
// //           <li key={date}>
// //             {date}: {percent}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default StudentAttendanceView;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Import axios
// import { services } from '../../services';

// const StudentAttendanceView = () => {
//   const [attendanceData, setAttendanceData] = useState({});
//   const [subjectAggregates, setSubjectAggregates] = useState({});
//   const [totalAggregate, setTotalAggregate] = useState('N/A'); // Default to 'N/A'

//   useEffect(() => {
//     // Define the API endpoint URL for fetching attendance data
    
//     // Replace 'your-student-id' and 'your-section-id' with the actual student and section IDs
//     const studentId =JSON.parse(window.localStorage.getItem("USER")).id;
//     const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

//     // Make the API request
//    services.user.getAttendance()
//       .then((response) => {
//         // Assuming the API response matches the structure you provided
//         const data = response.data;

//         // Check if the data exists for the specified section and student
//         if (data[sectionId] && data[sectionId][studentId]) {
//           const studentData = data[sectionId][studentId];

//           // Calculate subject-wise aggregates
//           const subjectAggs = {};
//           let totalPresent = 0;
//           let totalDays = 0;

//           Object.keys(studentData).forEach((subjectId) => {
//             const subjectDates = studentData[subjectId];
//             let subjectPresent = 0;
//             let subjectTotalDays = 0;

//             Object.keys(subjectDates).forEach((date) => {
//               const attendanceArray = subjectDates[date];
//               const presentCount = attendanceArray.filter((status) => status === true).length;
//               subjectPresent += presentCount;
//               subjectTotalDays += attendanceArray.length;
//             });

//             const subjectAggregate = (subjectPresent / subjectTotalDays) * 100;
//             subjectAggs[subjectId] = subjectAggregate.toFixed(2) + '%';

//             totalPresent += subjectPresent;
//             totalDays += subjectTotalDays;
//           });

//           // Calculate the total aggregate
//           const totalAggregatePercent = (totalPresent / totalDays) * 100;
//           setTotalAggregate(totalAggregatePercent.toFixed(2) + '%');

//           // Set subject-wise aggregates and total aggregate in state
//           setSubjectAggregates(subjectAggs);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching attendance data:', error);
//       });
//   }, []); // The empty dependency array ensures this effect runs once on component mount

//   return (
//     <div>
//       <h2>Student Attendance View</h2>
//       <p>Total Aggregate: {totalAggregate}</p>
//       <h3>Subject-wise Attendance</h3>
//       <ul>
//         {Object.keys(subjectAggregates).map((subjectId) => (
//           <li key={subjectId}>
//             Subject ID: {subjectId}, Attendance: {subjectAggregates[subjectId]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentAttendanceView;
// import React, { useEffect, useState } from 'react';

// import { services } from '../../services';

// const StudentAttendanceView = () => {
//   const [subjectId, setSubjectId] = useState([]); // Set the subject ID you want to retrieve
//   const [attendanceData, setAttendanceData] = useState({});
//   useEffect(() => {
//     services.getSubjects().then((res) => {
//       setSubjectId(res.data);
     
//       //set the sections and filtered section state
//     });
//   }, []);
//   useEffect(() => {
//     // Define the API endpoint URL for fetching attendance data
//    // Replace with your actual API endpoint

//     // Replace 'your-section-id' with the actual section ID
    
//     const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

//     // Make the API request
//    services.user.getAttendance()
//       .then((response) => {
//         // Assuming the API response matches the structure you provided
//         const data = response.data;

//         // Check if data exists for the specified section
//         if (data[sectionId]) {
//           const sectionData = data[sectionId];

//           // Check if data exists for the specified subject
//           if (sectionData[subjectId]) {
//             const subjectData = sectionData[subjectId];
//             setAttendanceData(subjectData);
//           } else {
//             console.error('Data not found for the specified subject ID.');
//           }
//         } else {
//           console.error('Data not found for the specified section ID.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching attendance data:', error);
//       });
//   }, [subjectId]); // Re-fetch data when the subjectId changes

//   return (
//     <div>
//       <h2>Student Attendance View</h2>
//       <h3>Attendance-Report</h3>
//         <h4>Subject : {subjectId}</h4>
//       <ul>
//         {Object.keys(attendanceData).map((date) => (
//           <li key={date}>
//            <p> Date: {date}</p>
//            <p> Status: {attendanceData[date].join(', ')}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentAttendanceView;
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';

// const StudentAttendanceView = () => {
//   const [subjects, setSubjects] = useState([]); // Set the list of subjects
//   const [attendanceData, setAttendanceData] = useState({});
  
//   useEffect(() => {
//     // Fetch the list of subjects
//     services.getSubjects().then((res) => {
//       setSubjects(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     // Define the API endpoint URL for fetching attendance data
//     // Replace 'your-section-id' with the actual section ID
//     const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;
    
//     // Function to fetch attendance data for a specific subject
//     const fetchAttendanceForSubject = async (subjectId) => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Check if data exists for the specified section
//         if (data[sectionId]) {
//           const sectionData = data[sectionId];

//           // Check if data exists for the specified subject
//           if (sectionData[subjectId]) {
//             const subjectData = sectionData[subjectId];
//             setAttendanceData(subjectData);
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         } else {
//           console.error(`Data not found for section ID: ${sectionId}`);
//         }
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Loop through each subject and fetch attendance data
//     subjects.forEach((subject) => {
//       fetchAttendanceForSubject(subject.id);
//     });
//   }, [subjects]); // Re-fetch data when the list of subjects changes

//   return (
//     <div>
//       <h2>Student Attendance View</h2>
//       <h3>Attendance Report</h3>
//       {subjects.map((subject) => (
//         <div key={subject.id}>
//           <h4>Subject: {subject.name}</h4>
//           <ul>
//             {Object.keys(attendanceData).map((date) => (
//               <li key={date}>
//                 <p>Date: {date}</p>
//                 <p>Status: {attendanceData[date].join(', ')}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudentAttendanceView;
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';

// const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects

// const formatTimestampToLocalString = (timestamp) => {
//   const date = new Date(parseInt(timestamp, 10));
//   return date.toLocaleDateString();
// };

// const getStatusText = (status) => (status ? 'Present' : 'Absent');

// const StudentAttendanceView = () => {
//   const currentUser = JSON.parse(window.localStorage.getItem("USER"));
//   const sectionId = currentUser.section;
//   const studentId = currentUser.id;

//   const [attendanceData, setAttendanceData] = useState({});
//   const [totalAggregates, setTotalAggregates] = useState({});
//   const [overallTotalAggregate, setOverallTotalAggregate] = useState(null); // Initialize overall total aggregate as null

//   useEffect(() => {
//     const fetchDataForAllSubjects = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Initialize variables to calculate overall total aggregate
//         let calculatedOverallTotalAggregate = 0;
//         let totalSubjectCount = 0;
//         let totalDatesCount = 0;

//         // Loop through each subject and fetch attendance data
//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             let totalAggregate = 0; // To calculate total aggregate for the current subject

//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               const statusArray = data[sectionId][subjectId][date];

//               // Check if attendance data exists for the current student and date
//               if (statusArray[studentId] !== undefined) {
//                 // Calculate subject-wise aggregate for the current date
//                 const subjectAggregate = (statusArray.reduce(
//                   (acc, status) => (status ? acc + 1 : acc),
//                   0
//                 ) / statusArray.length) * 100; // Convert to percentage

//                 totalAggregate += subjectAggregate;

//                 // Store the subject-wise aggregate for the current date
//                 formattedData[formattedDate] = getStatusText(statusArray[studentId]); // Display "Present" or "Absent"
//               } else {
//                 formattedData[formattedDate] = 'N/A'; // Data not available for this student
//               }
//             });

//             // Calculate the total aggregate for the current subject
//             const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//             setTotalAggregates((prevAggregates) => ({
//               ...prevAggregates,
//               [subjectId]: subjectTotalAggregate,
//             }));

//             // Update the attendance data for the current subject
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));

//             // Update variables for overall total aggregate calculation
//             calculatedOverallTotalAggregate += totalAggregate;
//             totalSubjectCount++;
//             totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         });

//         // Calculate the overall total aggregate
//         const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
//         setOverallTotalAggregate(overallAggregate);
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForAllSubjects();
//   }, [studentId, sectionId]); // Re-fetch data when the student ID or section ID changes

//   return (
//     <Wrapper>
//       <h3>Attendance Report</h3>
//       <p>Overall Aggregate: {overallTotalAggregate}</p>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             {/* <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date]}</td>
//                   </tr>
//                 ))}
//             </tbody> */}
//             <tbody>
//   {attendanceData[subjectId] &&
//     Object.keys(attendanceData[subjectId]).map((date) => (
//       <tr key={date}>
//         <td>{date}</td>
//         <td>
//           {attendanceData[subjectId][date] === undefined
//             ? 'N/A'
//             : attendanceData[subjectId][date]}
//         </td>
//       </tr>
//     ))}
// </tbody>
//           </table>
//           <p>Aggregate: {totalAggregates[subjectId]}</p>
//         </div>
//       ))}
//     </Wrapper>
//   );
// };

// export default StudentAttendanceView;
//6.07 wala code
//6.11wala
import React, { useEffect, useState } from 'react';
import { services } from '../../services';
import { Wrapper } from './style';
import { subjects } from '../../services';



const StudentAttendanceView = () => {
  // const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;
const currentUserId = JSON.parse(window.localStorage.getItem("USER")).id;
const formatTimestampToLocalString = (timestamp) => {
  const date = new Date(parseInt(timestamp, 10));
  return date.toLocaleDateString();
};

const getStatusText = (status) => (status ? 'Present' : 'Absent');
 // Get the ID of the currently logged-in user
  const [attendanceData, setAttendanceData] = useState({});
  const [totalAggregates, setTotalAggregates] = useState({});
  const [overallTotalAggregate, setOverallTotalAggregate] = useState(null); // Initialize overall total aggregate as null

  // useEffect(() => {
  //   const fetchDataForCurrentUser = async () => {
  //     try {
  //       const response = await services.user.getAttendance();
  //       const data = response.data;

  //       // Initialize variables to calculate overall total aggregate
  //       let calculatedOverallTotalAggregate = 0;
  //       let totalSubjectCount = 0;
  //       let totalDatesCount = 0;

  //       // Loop through each subject and fetch attendance data
  //       subjects.forEach(async (subjectId) => {
  //         if (data[sectionId] && data[sectionId][subjectId]) {
  //           // Convert timestamps to local date strings
  //           const formattedData = {};
  //           let totalAggregate = 0; // To calculate total aggregate for the current subject

  //           Object.keys(data[sectionId][subjectId]).forEach((date) => {
  //             const formattedDate = formatTimestampToLocalString(date);
  //             const statusArray = data[sectionId][subjectId][date];

  //             // Check if attendance data is available for the student on this date
  //             if (statusArray && statusArray.length > 0) {
  //               // Calculate subject-wise aggregate for the current date
  //               const subjectAggregate = (
  //                 (statusArray.reduce((acc, status) => (status ? acc + 1 : acc), 0) /
  //                   statusArray.length) *
  //                 100
  //               ).toFixed(2); // Format as percentage

  //               totalAggregate += parseFloat(subjectAggregate); // Parse and add to total
  //               formattedData[formattedDate] = getStatusText(statusArray[0]); // Display "Present" or "Absent"
  //             } else {
  //               // If attendance data is not available for the student, display "N/A"
  //               formattedData[formattedDate] = 'N/A';
  //             }
  //           });

  //           // Calculate the total aggregate for the current subject
  //           const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
  //           setTotalAggregates((prevAggregates) => ({
  //             ...prevAggregates,
  //             [subjectId]: subjectTotalAggregate,
  //           }));

  //           // Update the attendance data for the current subject
  //           setAttendanceData((prevData) => ({
  //             ...prevData,
  //             [subjectId]: formattedData,
  //           }));

  //           // Update variables for overall total aggregate calculation
  //           calculatedOverallTotalAggregate += totalAggregate;
  //           totalSubjectCount++;
  //           totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
  //         } else {
  //           console.log(`Data not found for subject ID: ${subjectId}`);

  //         }
  //       });

  //       // Calculate the overall total aggregate
  //       const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
  //       setOverallTotalAggregate(overallAggregate);
  //     } catch (error) {
  //       console.error('Error fetching attendance data:', error);
  //     }
  //   };

  //   // Fetch attendance data when the component mounts
  //   fetchDataForCurrentUser();
  // }, []); // Only fetch data once when the component mounts
  useEffect(() => {
    const fetchDataForCurrentUser = async () => {
      try {
        const response = await services.user.getAttendance();
        const data = response.data;
  
        // Initialize variables to calculate overall total aggregate
        let calculatedOverallTotalAggregate = 0;
        let totalSubjectCount = 0;
        let totalDatesCount = 0;
  
        // Loop through each subject and fetch attendance data
        subjects.forEach(async (subjectId) => {
          if (data[sectionId] && data[sectionId][subjectId]) {
            // Convert timestamps to local date strings
            const formattedData = {};
            let totalAggregate = 0; // To calculate total aggregate for the current subject
  
            Object.keys(data[sectionId][subjectId]).forEach((date) => {
              const formattedDate = formatTimestampToLocalString(date);
              const statusArray = data[sectionId][subjectId][date];
  
              // Check if attendance data is available for the student on this date
              if (statusArray && statusArray.length > 0) {
                // Calculate subject-wise aggregate for the current date
                const subjectAggregate = (
                  (statusArray.reduce((acc, status) => (status ? acc + 1 : acc), 0) /
                    statusArray.length) *
                  100
                ).toFixed(2); // Format as percentage
  
                totalAggregate += parseFloat(subjectAggregate); // Parse and add to total
                formattedData[formattedDate] = getStatusText(statusArray[0]); // Display "Present" or "Absent"
              } else {
                // If attendance data is not available for the student, display "N/A"
                formattedData[formattedDate] = 'N/A';
              }
            });
  
            // Calculate the total aggregate for the current subject
            const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
            setTotalAggregates((prevAggregates) => ({
              ...prevAggregates,
              [subjectId]: subjectTotalAggregate,
            }));
  
            // Update the attendance data for the current subject
            setAttendanceData((prevData) => ({
              ...prevData,
              [subjectId]: formattedData,
            }));
  
            // Update variables for overall total aggregate calculation
            calculatedOverallTotalAggregate += totalAggregate;
            totalSubjectCount++;
            totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
          } else {
            // If data is not found for the subject, set "N/A" for that subject
            setTotalAggregates((prevAggregates) => ({
              ...prevAggregates,
              [subjectId]: 'N/A',
            }));
            setAttendanceData((prevData) => ({
              ...prevData,
              [subjectId]: {},
            }));
          }
        });
  
        // Calculate the overall total aggregate
        const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
        setOverallTotalAggregate(overallAggregate);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };
  
    // Fetch attendance data when the component mounts
    fetchDataForCurrentUser();
  }, []); // Only fetch data once when the component mounts
  
  return (
    <Wrapper>
      <h3>Attendance Report</h3>
      <p>Overall  Aggregate: {overallTotalAggregate}</p>
      {subjects.map((subjectId) => (
        <div key={subjectId}>
          <h4>Subject: {subjectId}</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData[subjectId] &&
                Object.keys(attendanceData[subjectId]).map((date) => (
                  <tr key={date}>
                    <td>{date}</td>
                    <td>{attendanceData[subjectId][date]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p>Aggregate: {totalAggregates[subjectId]}</p>
        </div>
      ))}
    </Wrapper>
  );
};

 export default StudentAttendanceView;
//6.11 ke bad wala
// 
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';


// const formatTimestampToLocalString = (timestamp) => {
//   const date = new Date(parseInt(timestamp, 10));
//   return date.toLocaleDateString();
// };

// const getStatusText = (status) => (status ? 'Present' : 'Absent');

// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
// const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;
// const currentUserId = JSON.parse(window.localStorage.getItem("USER")).id; // Get the ID of the currently logged-in user

//   const [attendanceData, setAttendanceData] = useState({});
//   const [totalAggregates, setTotalAggregates] = useState(
//     subjects.reduce((aggregates, subject) => {
//       aggregates[subject] = 'N/A'; // Initialize with 'N/A' for all subjects
//       return aggregates;
//     }, {})
//   );
//   const [overallTotalAggregate, setOverallTotalAggregate] = useState(null); // Initialize overall total aggregate as null

//   useEffect(() => {
//     const fetchDataForCurrentUser = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Initialize variables to calculate overall total aggregate
//         let calculatedOverallTotalAggregate = 0;
//         let totalSubjectCount = 0;
//         let totalDatesCount = 0;

//         // Loop through each subject and fetch attendance data
//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             let totalAggregate = 0; // To calculate total aggregate for the current subject

//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               const statusArray = data[sectionId][subjectId][date];

//               // Check if attendance data is available for the student on this date
//               if (statusArray && statusArray.length > 0) {
//                 // Calculate subject-wise aggregate for the current date
//                 const subjectAggregate = (
//                   (statusArray.reduce((acc, status) => (status ? acc + 1 : acc), 0) /
//                     statusArray.length) *
//                   100
//                 ).toFixed(2); // Format as percentage

//                 totalAggregate += parseFloat(subjectAggregate); // Parse and add to total
//                 formattedData[formattedDate] = getStatusText(statusArray[0]); // Display "Present" or "Absent"
//               } else {
//                 // If attendance data is not available for the student, display "N/A"
//                 formattedData[formattedDate] = 'N/A';
//               }
//             });

//             // Calculate the total aggregate for the current subject
//             const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//             setTotalAggregates((prevAggregates) => ({
//               ...prevAggregates,
//               [subjectId]: subjectTotalAggregate,
//             }));

//             // Update the attendance data for the current subject
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));

//             // Update variables for overall total aggregate calculation
//             calculatedOverallTotalAggregate += totalAggregate;
//             totalSubjectCount++;
//             totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
//           } else {
//             // If data not found for subject ID, display "N/A" for all dates
//             const formattedData = {};
//             subjects.forEach((subject) => {
//               const dateKeys = Object.keys(data[sectionId][subject]);
//               dateKeys.forEach((date) => {
//                 formattedData[formatTimestampToLocalString(date)] = 'N/A';
//               });
//             });

//             // Set "N/A" for this subject's attendance data
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));

//             // Set "N/A" for this subject's total aggregate
//             setTotalAggregates((prevAggregates) => ({
//               ...prevAggregates,
//               [subjectId]: 'N/A',
//             }));
//           }
//         });

//         // Calculate the overall total aggregate
//         if (totalSubjectCount > 0 && totalDatesCount > 0) {
//           const overallAggregate = (
//             (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'
//           ); // Format as percentage
//           setOverallTotalAggregate(overallAggregate);
//         } else {
//           // Set "N/A" for overall total aggregate if no data found
//           setOverallTotalAggregate('N/A');
//         }
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForCurrentUser();
//   }, []); // Only fetch data once when the component mounts

//   return (
//     <Wrapper>
//       <h3>Attendance Report</h3>
//       <p>Overall  Aggregate: {overallTotalAggregate}</p>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date]}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <p>Aggregate: {totalAggregates[subjectId]}</p>
//         </div>
//       ))}
//     </Wrapper>
//   );
// };

// export default StudentAttendanceView;

//6.31 wala
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';



// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
// const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

// const formatTimestampToLocalString = (timestamp) => {
//   const date = new Date(parseInt(timestamp, 10));
//   return date.toLocaleDateString();
// };


//   const [attendanceData, setAttendanceData] = useState({});
//   const [totalAggregates, setTotalAggregates] = useState({});
//   const [overallTotalAggregate, setOverallTotalAggregate] = useState(null); // Initialize overall total aggregate as null
//   const currentStudentId = JSON.parse(window.localStorage.getItem("USER")).id;
//   const getStatusText = (status) => (status ? 'Present' : 'Absent');
//   // useEffect(() => {
//   //   const fetchDataForAllSubjects = async () => {
//   //     try {
//   //       const response = await services.user.getAttendance();
//   //       const data = response.data;

//   //       // Initialize variables to calculate overall total aggregate
//   //       let calculatedOverallTotalAggregate = 0;
//   //       let totalSubjectCount = 0;
//   //       let totalDatesCount = 0;

//   //       // Loop through each subject and fetch attendance data
//   //       subjects.forEach(async (subjectId) => {
//   //         if (data[sectionId] && data[sectionId][subjectId]) {
//   //           // Convert timestamps to local date strings
//   //           const formattedData = {};
//   //           let totalAggregate = 0; // To calculate total aggregate for the current subject

//   //           Object.keys(data[sectionId][subjectId]).forEach((date) => {
//   //             const formattedDate = formatTimestampToLocalString(date);
//   //             const statusArray = data[sectionId][subjectId][date];

//   //             // Check if the current student's attendance data exists
//   //             if (statusArray[currentStudentId] !== undefined) {
//   //               // Calculate subject-wise aggregate for the current date
//   //               const subjectAggregate = (statusArray[currentStudentId] ? 100 : 0); // 100% if present, 0% if absent

//   //               totalAggregate += subjectAggregate;

//   //               // Store the subject-wise aggregate for the current date
//   //               formattedData[formattedDate] = getStatusText(statusArray[currentStudentId]);
//   //             } else {
//   //               // If data doesn't exist for the current student, set "N/A"
//   //               formattedData[formattedDate] = 'N/A';
//   //             }
//   //           });

//   //           // Calculate the total aggregate for the current subject
//   //           const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//   //           setTotalAggregates((prevAggregates) => ({
//   //             ...prevAggregates,
//   //             [subjectId]: subjectTotalAggregate,
//   //           }));

//   //           // Update the attendance data for the current subject
//   //           setAttendanceData((prevData) => ({
//   //             ...prevData,
//   //             [subjectId]: formattedData,
//   //           }));

//   //           // Update variables for overall total aggregate calculation
//   //           calculatedOverallTotalAggregate += totalAggregate;
//   //           totalSubjectCount++;
//   //           totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
//   //         } else {
//   //           // If data is not found for the subject, set "N/A" for that subject
//   //           setTotalAggregates((prevAggregates) => ({
//   //             ...prevAggregates,
//   //             [subjectId]: 'N/A',
//   //           }));
//   //           setAttendanceData((prevData) => ({
//   //             ...prevData,
//   //             [subjectId]: {},
//   //           }));
//   //         }
//   //       });

//   //       // Calculate the overall total aggregate
//   //       const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
//   //       setOverallTotalAggregate(overallAggregate);
//   //     } catch (error) {
//   //       console.error('Error fetching attendance data:', error);
//   //     }
//   //   };

//   //   // Fetch attendance data when the component mounts
//   //   fetchDataForAllSubjects();
//   // }, [currentStudentId]); // Only fetch data once when the component mounts
// // ...

// // ...

// useEffect(() => {
//   const fetchDataForAllSubjects = async () => {
//     try {
//       const response = await services.user.getAttendance();
//       const data = response.data;

//       // Initialize variables to calculate overall total aggregate
//       let calculatedOverallTotalAggregate = 0;
//       let totalSubjectCount = 0;
//       let totalDatesCount = 0;

//       // Loop through each subject and fetch attendance data
//       subjects.forEach(async (subjectId) => {
//         if (data[sectionId] && data[sectionId][subjectId]) {
//           // Convert timestamps to local date strings
//           const formattedData = {};
//           let totalAggregate = 0; // To calculate total aggregate for the current subject

//           Object.keys(data[sectionId][subjectId]).forEach((date) => {
//             const formattedDate = formatTimestampToLocalString(date);
//             const statusArray = data[sectionId][subjectId][date];

//             // Check if the current student's attendance data exists
//             if (statusArray[currentStudentId] !== undefined) {
//               // Calculate subject-wise aggregate for the current date
//               const subjectAggregate = (statusArray[currentStudentId] ? 100 : 0); // 100% if present, 0% if absent

//               totalAggregate += subjectAggregate;

//               // Store the subject-wise aggregate for the current date
//               formattedData[formattedDate] = getStatusText(statusArray[currentStudentId]);
//             } else {
//               // If data doesn't exist for the current student for this date, set "N/A"
//               formattedData[formattedDate] = 'N/A';
//             }
//           });

//           // Calculate the total aggregate for the current subject
//           const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//           setTotalAggregates((prevAggregates) => ({
//             ...prevAggregates,
//             [subjectId]: subjectTotalAggregate,
//           }));

//           // Update the attendance data for the current subject
//           setAttendanceData((prevData) => ({
//             ...prevData,
//             [subjectId]: formattedData,
//           }));

//           // Update variables for overall total aggregate calculation
//           calculatedOverallTotalAggregate += totalAggregate;
//           totalSubjectCount++;
//           totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
//         } else {
//           // If data is not found for the subject, set "N/A" for that subject
//           setTotalAggregates((prevAggregates) => ({
//             ...prevAggregates,
//             [subjectId]: 'N/A',
//           }));
//           setAttendanceData((prevData) => ({
//             ...prevData,
//             [subjectId]: {},
//           }));
//         }
//       });

//       // Calculate the overall total aggregate
//       const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
//       setOverallTotalAggregate(overallAggregate);
//     } catch (error) {
//       console.error('Error fetching attendance data:', error);
//     }
//   };

//   // Fetch attendance data when the component mounts
//   fetchDataForAllSubjects();
// }, [currentStudentId]); // Only fetch data once when the component mounts

// // ...

// // ...

//   return (
//     <Wrapper>
//       <h3>Attendance Report</h3>
//       <p>Overall Aggregate: {overallTotalAggregate}</p>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date]}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <p>Aggregate: {totalAggregates[subjectId]}</p>
//         </div>
//       ))}
//     </Wrapper>
//   );
// };

// export default StudentAttendanceView;


//6 bje wala code
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';

//  // Replace with your array of subjects



// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA'];
//   const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;
//   const formatTimestampToLocalString = (timestamp) => {
//     const date = new Date(parseInt(timestamp, 10));
//     return date.toLocaleDateString();
//   };
  
//   const getStatusText = (status) => (status ? 'Present' : 'Absent');
  
//   const [attendanceData, setAttendanceData] = useState({});
//   const [totalAggregates, setTotalAggregates] = useState({});
//   const [overallTotalAggregate, setOverallTotalAggregate] = useState(null); // Initialize overall total aggregate as null

//   useEffect(() => {
//     const fetchDataForAllSubjects = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Initialize variables to calculate overall total aggregate
//         let calculatedOverallTotalAggregate = 0;
//         let totalSubjectCount = 0;
//         let totalDatesCount = 0;

//         // Loop through each subject and fetch attendance data
//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             let totalAggregate = 0; // To calculate total aggregate for the current subject

//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               const statusArray = data[sectionId][subjectId][date];

//               // Check if attendance data is available for the student on this date
//               if (statusArray && statusArray.length > 0) {
//                 // Calculate subject-wise aggregate for the current date
//                 const subjectAggregate = (
//                   (statusArray.reduce((acc, status) => (status ? acc + 1 : acc), 0) /
//                     statusArray.length) *
//                   100
//                 ).toFixed(2); // Format as percentage

//                 totalAggregate += parseFloat(subjectAggregate); // Parse and add to total
//                 formattedData[formattedDate] = getStatusText(statusArray[0]); // Display "Present" or "Absent"
//               } else {
//                 // If attendance data is not available, display "N/A"
//                 formattedData[formattedDate] = 'N/A';
//               }
//             });

//             // Calculate the total aggregate for the current subject
//             const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//             setTotalAggregates((prevAggregates) => ({
//               ...prevAggregates,
//               [subjectId]: subjectTotalAggregate,
//             }));

//             // Update the attendance data for the current subject
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));

//             // Update variables for overall total aggregate calculation
//             calculatedOverallTotalAggregate += totalAggregate;
//             totalSubjectCount++;
//             totalDatesCount = Object.keys(data[sectionId][subjectId]).length;
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         });

//         // Calculate the overall total aggregate
//         const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
//         setOverallTotalAggregate(overallAggregate);
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForAllSubjects();
//   }, []); // Only fetch data once when the component mounts

//   return (
//     <Wrapper>
//       <h3>Attendance Report</h3>
//       <p>Overall  Aggregate: {overallTotalAggregate}</p>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date]}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <p>Aggregate: {totalAggregates[subjectId]}</p>
//         </div>
//       ))}
//     </Wrapper>
//   );
// };

// export default StudentAttendanceView;


//abhi wala code
// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';
// const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects


// const formatTimestampToLocalString = (timestamp) => {
//   const date = new Date(parseInt(timestamp, 10));
//   return date.toLocaleDateString();
// };

// const getStatusText = (status) => (status ? 'Present' : 'Absent');

// const StudentAttendanceView = () => {
//   const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;
//   const [attendanceData, setAttendanceData] = useState({});
//   const [totalAggregates, setTotalAggregates] = useState({});
//   const [overallTotalAggregate, setOverallTotalAggregate] = useState(0); // Define the overall total aggregate state

//   useEffect(() => {
//     const fetchDataForAllSubjects = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Loop through each subject and fetch attendance data
//         let calculatedOverallTotalAggregate = 0; // Initialize the overall total aggregate

//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             let totalAggregate = 0; // To calculate total aggregate for the current subject

//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               const statusArray = data[sectionId][subjectId][date];

//               // Calculate subject-wise aggregate for the current date
//               const subjectAggregate = (statusArray.reduce(
//                 (acc, status) => (status ? acc + 1 : acc),
//                 0
//               ) / statusArray.length) * 100; // Convert to percentage

//               totalAggregate += subjectAggregate;

//               // Store the subject-wise aggregate for the current date
//               formattedData[formattedDate] = getStatusText(statusArray[0]); // Display "Present" or "Absent"
//             });

//             // Calculate the total aggregate for the current subject
//             const subjectTotalAggregate = (totalAggregate / Object.keys(formattedData).length).toFixed(2) + '%'; // Format as percentage
//             setTotalAggregates((prevAggregates) => ({
//               ...prevAggregates,
//               [subjectId]: subjectTotalAggregate,
//             }));

//             // Update the attendance data for the current subject
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         });

//         // Calculate the overall total aggregate
//         const totalSubjectCount = subjects.length;
//         const totalDatesCount = Object.keys(data[sectionId][subjects[0]]).length;
//         const overallAggregate = (calculatedOverallTotalAggregate / (totalSubjectCount * totalDatesCount)).toFixed(2) + '%'; // Format as percentage
//         setOverallTotalAggregate(overallAggregate);
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForAllSubjects();
//   }, []); // Only fetch data once when the component mounts

//   return (
//     <Wrapper>
//       <h2>Student Attendance View</h2>
//       <h3>Attendance Report</h3>
      
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date]}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <p> Aggregate: {totalAggregates[subjectId]}</p>
//         </div>
//       ))}
//       <p>Overall  Aggregate: {overallTotalAggregate}</p>
//       </Wrapper>
//   );
// };

// export default StudentAttendanceView;



// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';
// import { Wrapper } from './style';


// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
//   const [attendanceData, setAttendanceData] = useState({});
//   const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

//   const formatTimestampToLocalString = (timestamp) => {
//     const date = new Date(parseInt(timestamp, 10));
//     return date.toLocaleDateString();
//   };

//   useEffect(() => {
//     const fetchDataForAllSubjects = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Loop through each subject and fetch attendance data
//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               formattedData[formattedDate] = data[sectionId][subjectId][date];
//             });

//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         });
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForAllSubjects();
//   }, []); // Only fetch data once when the component mounts

//   return (
//     <Wrapper>
      
//       <h3>Attendance Report</h3>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{date}</td>
//                     <td>{attendanceData[subjectId][date].join(', ')}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//    </Wrapper>
//   );
// };

// export default StudentAttendanceView;

// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';

// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
//   const [attendanceData, setAttendanceData] = useState({});
//   const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

//   const formatTimestampToLocalString = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const calculateAggregate = (subjectData) => {
//     const totalDays = Object.keys(subjectData).length;
//     const presentDays = Object.values(subjectData).reduce((count, statuses) => {
//       return count + statuses.filter((status) => status === true).length;
//     }, 0);
//     return (presentDays / totalDays * 100).toFixed(2);
//   };

//   const calculateTotalAggregate = () => {
//     let totalAggregate = 0;
//     subjects.forEach((subjectId) => {
//       if (attendanceData[subjectId]) {
//         totalAggregate += parseFloat(attendanceData[subjectId].aggregate);
//       }
//     });
//     return (totalAggregate / subjects.length).toFixed(2);
//   };

//   useEffect(() => {
//     const fetchDataForAllSubjects = async () => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Loop through each subject and fetch attendance data
//         subjects.forEach(async (subjectId) => {
//           if (data[sectionId] && data[sectionId][subjectId]) {
//             // Convert timestamps to local date strings
//             const formattedData = {};
//             Object.keys(data[sectionId][subjectId]).forEach((date) => {
//               const formattedDate = formatTimestampToLocalString(date);
//               formattedData[formattedDate] = data[sectionId][subjectId][date];
//             });

//             const aggregate = calculateAggregate(formattedData);
//             formattedData.aggregate = aggregate;

//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: formattedData,
//             }));
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         });
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Fetch attendance data when the component mounts
//     fetchDataForAllSubjects();
//   }, []); // Only fetch data once when the component mounts

//   return (
//     <div>
//       <h2>Student Attendance View</h2>
//       <h3>Attendance Report</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Total Days</th>
//             <th>Present Days</th>
//             <th>Aggregate (%)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subjects.map((subjectId) => (
//             <tr key={subjectId}>
//               <td>{subjectId}</td>
//               {attendanceData[subjectId] ? (
//                 <>
//                   <td>{Object.keys(attendanceData[subjectId]).length}</td>
//                   <td>{Object.values(attendanceData[subjectId]).flat().filter((status) => status === true).length}</td>
//                   <td>{attendanceData[subjectId].aggregate}%</td>
//                 </>
//               ) : (
//                 <td colSpan="3">Data not available</td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <h3>Total Aggregate</h3>
//         <p>{calculateTotalAggregate()}%</p>
//       </div>
//     </div>
//   );
// };

// export default StudentAttendanceView;

// import React, { useEffect, useState } from 'react';
// import { services } from '../../services';

// const StudentAttendanceView = () => {
//   const subjects = ['Dbms', 'OOPS', 'DSA']; // Replace with your array of subjects
//   const [attendanceData, setAttendanceData] = useState({});

//   useEffect(() => {
//     // Define the API endpoint URL for fetching attendance data
//     // Replace 'your-section-id' with the actual section ID
//     const sectionId = JSON.parse(window.localStorage.getItem("USER")).section;

//     // Function to fetch attendance data for a specific subject
//     const fetchAttendanceForSubject = async (subjectId) => {
//       try {
//         const response = await services.user.getAttendance();
//         const data = response.data;

//         // Check if data exists for the specified section
//         if (data[sectionId]) {
//           const sectionData = data[sectionId];

//           // Check if data exists for the specified subject
//           if (sectionData[subjectId]) {
//             const subjectData = sectionData[subjectId];
//             setAttendanceData((prevData) => ({
//               ...prevData,
//               [subjectId]: subjectData,
//             }));
//           } else {
//             console.error(`Data not found for subject ID: ${subjectId}`);
//           }
//         } else {
//           console.error(`Data not found for section ID: ${sectionId}`);
//         }
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };

//     // Loop through each subject and fetch attendance data
//     subjects.forEach((subjectId) => {
//       fetchAttendanceForSubject(subjectId);
//     });
//   }, [subjects]); // Re-fetch data when the list of subjects changes

//   return (
//     <div>
//       <h2>Student Attendance View</h2>
//       <h3>Attendance Report</h3>
//       {subjects.map((subjectId) => (
//         <div key={subjectId}>
//           <h4>Subject: {subjectId}</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData[subjectId] &&
//                 Object.keys(attendanceData[subjectId]).map((date) => (
//                   <tr key={date}>
//                     <td>{const date = new Date(parseInt(timestamp, 10));
//     return date.toLocaleDateString(); }</td>
//                     <td>{attendanceData[subjectId][date].join(', ')}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudentAttendanceView;



// // import React, { useEffect, useState } from 'react';
// // import { services } from '../../services';

// // const StudentAttendanceView = () => {
// //   const [sectionId, setSectionId] = useState(''); // Store section ID
// //   const [subjectId, setSubjectId] = useState(''); // Store subject ID
// //   const [sectionIds, setSectionIds] = useState([]); // Store available section IDs
// //   const [subjectIds, setSubjectIds] = useState([]); // Store available subject IDs
// //   const [attendanceData, setAttendanceData] = useState({});

// //   useEffect(() => {
// //     // Define the API endpoint URLs for fetching section and subject IDs
 

// //     // Make the API request to fetch section IDs
// //   services.getSections()
// //       .then((response) => {
// //         // Assuming the API response provides an array of section IDs
// //         const data = response.data;
// //         setSectionIds(data);
// //         if (data.length > 0) {
// //           // Set the initial section ID to the first available section ID
// //           setSectionId(data[0]);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching section IDs:', error);
// //       });

// //     // Make the API request to fetch subject IDs
// //     services.getSubjects()
// //       .then((response) => {
// //         // Assuming the API response provides an array of subject IDs
// //         const data = response.data;
// //         setSubjectIds(data);
// //         if (data.length > 0) {
// //           // Set the initial subject ID to the first available subject ID
// //           setSubjectId(data[0]);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching subject IDs:', error);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     // Skip fetching attendance data if sectionId or subjectId is empty
// //     if (!sectionId || !subjectId) {
// //       return;
// //     }

// //     // Define the API endpoint URL for fetching attendance data
// //  // Replace with your actual API endpoint

// //     // Make the API request to fetch attendance data based on sectionId and subjectId
// //     services.getSections().getSubjects()
// //       .then((response) => {
// //         // Assuming the API response matches the structure you provided
// //         const data = response.data;
// //         if (data[sectionId] && data[sectionId][subjectId]) {
// //           const subjectData = data[sectionId][subjectId];
// //           setAttendanceData(subjectData);
// //         } else {
// //           console.error('Data not found for the specified section and subject IDs.');
// //         }
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching attendance data:', error);
// //       });
// //   }, [sectionId, subjectId]);

// //   return (
// //     <div>
// //       <h2>Student Attendance View</h2>

// //       {/* Section dropdown */}
// //       <label htmlFor="sectionSelect">Select Section: </label>
// //       <select id="sectionSelect" value={sectionId} onChange={(e) => setSectionId(e.target.value)}>
// //         {sectionIds.map((section) => (
// //           <option key={section} value={section}>
// //             {section}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Subject dropdown */}
// //       <label htmlFor="subjectSelect">Select Subject: </label>
// //       <select id="subjectSelect" value={subjectId} onChange={(e) => setSubjectId(e.target.value)}>
// //         {subjectIds.map((subject) => (
// //           <option key={subject} value={subject}>
// //             {subject}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Display attendance data */}
// //       <h3>Attendance for Section ID: {sectionId}, Subject ID: {subjectId}</h3>
// //       <ul>
// //         {Object.keys(attendanceData).map((date) => (
// //           <li key={date}>
// //             Date: {date}, Attendance: {attendanceData[date].join(', ')}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default StudentAttendanceView;
