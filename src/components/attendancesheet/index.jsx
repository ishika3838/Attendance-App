// import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import { Wrapper } from "./style";
// import ViewAttendance from "../viewAttendance";
// import defaultplaceholder from "../assets/defaultplaceholder.png";

// const AttendanceSheet = () => {
//   let sectionId = new URLSearchParams(window.location.search).get("sectionId");
//   let subjectId = new URLSearchParams(window.location.search).get("subjectId");

//   useEffect(() => {
//     if (!localStorage.getItem("USER")) window.location = "/";
//   }, []);

//   const [students, setStudents] = useState([]);
//   const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
//   const [attendance, setAttendance] = useState([]);
//   const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
//   const [currentStudents, setCurrentStudents] = useState([]);
//   useEffect(() => {
//     const isAttendanceSubmitted = JSON.parse(localStorage.getItem(
//             `attendanceSubmitted_${sectionId}_${subjectId}`
//           )) || false;
        
//           setAttendanceSubmitted(isAttendanceSubmitted);
//     services.user
//       .read()
//       .then((res) => {
//         const studentList = res.data.filter(
//           (user) =>
//             user.role &&
//             user.role.toLowerCase() === "student" &&
//             user.section === sectionId
//         );
//         setStudents(studentList);
//         setAttendance(new Array(studentList.length).fill(null));
//         setCurrentStudents(
//           studentList.map((student, index) => ({ ...student, attendance: null }))
//         );
//       })
//       .catch((error) => {
//         console.log("Error fetching student data:", error);
//       });
//   }, [sectionId]);

//   const handleAttendanceChange = (status) => {
//     const updatedAttendance = [...attendance];
//     updatedAttendance[currentStudentIndex] = status;
//     setAttendance(updatedAttendance);
    
//     const nextStudentIndex = currentStudentIndex + 1;
//     if (nextStudentIndex < students.length) {
//       setCurrentStudentIndex(nextStudentIndex);

//     }
    
//   };

//   const markAttendance = () => {
//     const updatedAttendance = [...attendance];
//     updatedAttendance[currentStudentIndex] = currentStudents[currentStudentIndex].attendance;

//     services.user
//       .markattendance({
//         sectionId,
//         subjectId,
//         attendance: updatedAttendance,
//       })
//       .then((res) => {
//         console.log("Attendance marked successfully:", res.data);
//         alert("Attendance marked successfully");
//         // Add any additional logic or state updates here
//         setAttendanceSubmitted(true);
//                 localStorage.setItem(`attendanceSubmitted_${sectionId}${subjectId}`, true);
//                 // Update the attendance status in currentStudents
//         //    const updatedStudents = [...currentStudents];
//         // updatedStudents.forEach((student, index) => {
//         //   student.attendance = attendance[index];
//         // });
//         // setCurrentStudents(updatedStudents);
//         console.log("students:", students); // Debugging
//         console.log("attendance:", attendance);
//       })
//       .catch((error) => {
//         console.log("Error marking attendance:", error);
//       });
//   };

//   return (
//     <Wrapper>
//       <h1>Mark Attendance</h1>
//       <div className="underline"></div>
//       <div className="inner">
//         <div className="student-carousel">
//           {students.map((student, index) => (
//             <div
//               key={student.id}
//               className={`student-card ${
//                 index === currentStudentIndex ? "current" : ""
//               }`}
//             >
//               <img
//                 src={student.photoUrl || defaultplaceholder}
//                 alt={student.name}
//               />
//               <p>{student.name}</p>
//               <div className="attendance-buttons">
//                 <button id="presentbutton"
//                   className={attendance[currentStudentIndex] === true ? "present" : ""}
//                   onClick={() => handleAttendanceChange(true)}
//                 >
//                   Present
//                 </button>
//                 <button id="absentbutton"
//                   className={attendance[currentStudentIndex] === false ? "absent" : ""}
//                   onClick={() => handleAttendanceChange(false)}
//                 >
//                   Absent
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="prev-button"
//           onClick={() => setCurrentStudentIndex(currentStudentIndex - 1)}
//           disabled={currentStudentIndex === 0}
//         >
//           Previous
//         </button>
//       </div>
//       <button
//         className="mark-button"
//         onClick={markAttendance}
//         disabled={attendanceSubmitted || localStorage.getItem(`attendanceSubmitted_${sectionId}${subjectId}`, true)}
//       >
//         Submit Attendance
//       </button>
//       <ViewAttendance
//         sectionId={sectionId}
//         subjectId={subjectId}
//         students={students}
//       />
//     </Wrapper>
//   );
// };

// export default AttendanceSheet;
import React, { useEffect, useState } from "react";
import { services } from "../../services";
import { Wrapper } from "./style";
import ViewAttendance from "../viewAttendance";
import defaultplaceholder from "../assets/defaultplaceholder.png";

const AttendanceSheet = () => {
  let sectionId = new URLSearchParams(window.location.search).get("sectionId");
  let subjectId = new URLSearchParams(window.location.search).get("subjectId");

  useEffect(() => {
    if (!localStorage.getItem("USER")) {
      window.location = "/";
    }
  }, []);

  const [students, setStudents] = useState([]);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [attendance, setAttendance] = useState([]);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [markedCount, setMarkedCount] = useState(0);
  const [unmarkedCount, setUnmarkedCount] = useState(0);
  useEffect(() => {
    const isAttendanceSubmitted = JSON.parse(localStorage.getItem(
      `attendanceSubmitted_${sectionId}_${subjectId}`
    )) || false;

    setAttendanceSubmitted(isAttendanceSubmitted);

    services.user
      .read()
      .then((res) => {
        const studentList = res.data.filter(
          (user) =>
            user.role &&
            user.role.toLowerCase() === "student" &&
            user.section === sectionId
        );
        setStudents(studentList);
        setAttendance(new Array(studentList.length).fill(null));
        setCurrentStudents(
          studentList.map((student, index) => ({ ...student, attendance: null }))
        );
      })
      .catch((error) => {
        console.log("Error fetching student data:", error);
      });
  }, [sectionId]);

  // const handleAttendanceChange = (status) => {
  //   const updatedAttendance = [...attendance];
  //   updatedAttendance[currentStudentIndex] = status;
  //   setAttendance(updatedAttendance);

  //   const nextStudentIndex = currentStudentIndex + 1;
  //   if (nextStudentIndex < students.length) {
  //     setCurrentStudentIndex(nextStudentIndex);
  //   }
  // };
  const handleAttendanceChange = (status) => {
    attendance[currentStudentIndex] = status;
    const updatedStudents = [...currentStudents];
    updatedStudents.forEach((student, index) => {
      student.attendance = attendance[index];
    });
    setCurrentStudents(updatedStudents);
    const nextStudentIndex = currentStudentIndex + 1;
    if (nextStudentIndex < students.length) {
      setCurrentStudentIndex(nextStudentIndex);
    } else {
      // All students have been marked, calculate counts
      const marked = attendance.filter((status) => status === true).length;
      const unmarked = attendance.filter((status) => status === false).length;
      setMarkedCount(marked);
      setUnmarkedCount(unmarked);
    }

    // Update the state with the new attendance array
    setAttendance([...attendance]);
  };
  

  const markAttendance = () => {
    const updatedAttendance = [...attendance];
    updatedAttendance[currentStudentIndex] = currentStudents[currentStudentIndex].attendance;

    services.user
      .markattendance({
        sectionId,
        subjectId,
        attendance: updatedAttendance,
      })
      .then((res) => {
        console.log("Attendance marked successfully:", res.data);
        alert("Attendance marked successfully");
        setAttendanceSubmitted(true);
        localStorage.setItem(
          `attendanceSubmitted_${sectionId}${subjectId}`,
          true
        );

      })
      .catch((error) => {
        console.log("Error marking attendance:", error);
      });
  };

  return (
    <Wrapper>
      <h1>Mark Attendance</h1>
      <div className="underline"></div>
      <div className="attendance-summary">
        <div>
        <p>Present: {markedCount}</p>
        <p>Absent: {unmarkedCount}</p>
        </div>
        <button
          className="prev-button"
          onClick={() => setCurrentStudentIndex(currentStudentIndex - 1)}
          disabled={currentStudentIndex === 0}
        >
          Previous
        </button>
      </div>
      <div className="inner">
        <div className="student-carousel">
          {students.map((student, index) => (
            <div
              key={student.id}
              // className={`student-card ${
              //   index === currentStudentIndex ? "current" : ""
              // }`}
              className={`student-card ${students.length > 1 && index === currentStudentIndex ? "current" : ""}`}
            >
              <img
                src={student.photoUrl || defaultplaceholder}
                alt={student.name}
              />
              <p>{student.name}</p>
              
            </div>
            
          ))}
        </div>
        <div className="attendance-buttons">
                <button
                  id="presentbutton"
                  className={attendance[currentStudentIndex] === true ? "present" : ""}
                  onClick={() => handleAttendanceChange(true)}
                >
                  Present
                </button>
                <button
                  id="absentbutton"
                  className={attendance[currentStudentIndex] === false ? "absent" : ""}
                  onClick={() => handleAttendanceChange(false)}
                >
                  Absent
                </button>
              </div>
      </div>
      
      <button
        className="mark-button"
        onClick={markAttendance}
        disabled={attendanceSubmitted || localStorage.getItem(`attendanceSubmitted_${sectionId}${subjectId}`, true)}
      >
        Submit Attendance
      </button>
      <ViewAttendance
        sectionId={sectionId}
        subjectId={subjectId}
        students={students}
      />
    </Wrapper>
  );
};

export default AttendanceSheet;


// import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import { Wrapper } from "./style";
// import ViewAttendance from "../viewAttendance";

// import defaultplaceholder from "../assets/defaultplaceholder.png"



// const AttendanceSheet = () => {
//   let sectionId = new URLSearchParams(window.location.search).get("sectionId");
//   let subjectId = new URLSearchParams(window.location.search).get("subjectId");

//   useEffect(() => {
//     if (!localStorage.getItem("USER")) window.location = "/";
//   }, []);

//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [currentStudents, setCurrentStudents] = useState([]);
//   const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);

   
 
//   useEffect(() => {
//     const isAttendanceSubmitted = JSON.parse(localStorage.getItem(
//       `attendanceSubmitted_${sectionId}_${subjectId}`
//     )) || false;
  
//     setAttendanceSubmitted(isAttendanceSubmitted);
//     services.user
//       .read()
//       .then((res) => {
//         const studentList = res.data.filter(
//           (user) =>
//             user.role &&
//             user.role.toLowerCase() === "student" &&
//             user.section === sectionId
//         );
//         setStudents(studentList);
//         setAttendance(new Array(studentList.length).fill(false));
//         setCurrentStudents(studentList.map((student, index) => ({ ...student, attendance: false })));
//       })
//       .catch((error) => {
//         console.log("Error fetching student data:", error);
//       });
//   }, [sectionId,subjectId]);

//   const markAttendance = () => {
//     if(!attendanceSubmitted)
//    {    services.user
//       .markattendance({
//         sectionId,
//         subjectId,
//         attendance,
//       })
//       .then((res) => {
//         console.log("Attendance marked successfully:", res.data);
//         alert("attendance marked successfully");
//         // Implement this logic
//           setAttendanceSubmitted(true);
//         localStorage.setItem(`attendanceSubmitted_${sectionId}${subjectId}`, true);
//         // Update the attendance status in currentStudents
//         const updatedStudents = [...currentStudents];
//         updatedStudents.forEach((student, index) => {
//           student.attendance = attendance[index];
//         });
//         setCurrentStudents(updatedStudents);
//         console.log("students:", students); // Debugging
//         console.log("attendance:", attendance);
        
//       })
    
//       .catch((error) => {
//         console.log("Error marking attendance:", error);
//       });
//    }else{
//     alert('You have already submitted your attendance');
//    }
//   };


//   const toggleAttendance = (studentIndex, status) => {
//     const updatedAttendance = [...attendance];
//     updatedAttendance[studentIndex] = status;
//     setAttendance(updatedAttendance);

//     // Update the attendance status in currentStudents
//     const updatedStudents = [...currentStudents];
//     updatedStudents[studentIndex].attendance = status;
//     setCurrentStudents(updatedStudents);
//   };
  

//   return (
//     <Wrapper>
//       <h1>Mark Attendance</h1>
//       <div className="underline"></div>
//       <div className="inner">
//       <div className="student-carousel">
//           {currentStudents.map((student, index) => (
//             <div
//               key={student.id}
//               className={`student-card ${
//                 index === currentStudentIndex ? "current" : ""
//               }`}
//             >
//         {/* {students.map((student, index) => ( */}
//           {/* <div className="student-row" key={student.id}> */}
//             {/* <div className="student-info"> */}
//               <img src={student.photoUrl || defaultplaceholder} alt={student.name} />
//               <p>{student.name}</p>
//             {/* </div> */}
//             <div className="attendance-buttons">
//               <button id="presentbutton"
//                 className={attendance[index] === true ? "present" : ""}
//                 onClick={() => toggleAttendance(index, true)}
               
//               >
//                 Present
//               </button>
//              <button id="absentbutton"
//                 className={attendance[index] === false ? "absent" : ""}
//                 onClick={() => toggleAttendance(index, false)}
               
//               >
//                 Absent
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="mark-button" onClick={markAttendance}  disabled={attendanceSubmitted || localStorage.getItem(`attendanceSubmitted_${sectionId}${subjectId}`,true)}>
//       Submit Attendance
//       </button>
      
//       <ViewAttendance
//       sectionId={sectionId}
//       subjectId={subjectId}
//       students={currentStudents}
//        />
//     </Wrapper>
//   );
// };

// export default AttendanceSheet;

{/* // import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import { Wrapper } from "./style";
// import ViewAttendance from "../viewAttendance";
// import defaultplaceholder from "../assets/defaultplaceholder.png"; */}

  
//   //... (other code)
//    let sectionId = new URLSearchParams(window.location.search).get("sectionId");
//   let subjectId = new URLSearchParams(window.location.search).get("subjectId");

//   useEffect(() => {
//     if (!localStorage.getItem("USER")) window.location = "/";
//   }, []);

//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [currentStudents, setCurrentStudents] = useState([]);
//   const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
//   const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
//   useEffect(() => {
//     const isAttendanceSubmitted = JSON.parse(localStorage.getItem(
//       `attendanceSubmitted_${sectionId}_${subjectId}`
//     )) || false;
  
//     setAttendanceSubmitted(isAttendanceSubmitted);
//     services.user
//       .read()
//       .then((res) => {
//         const studentList = res.data.filter(
//           (user) =>
//             user.role &&
//             user.role.toLowerCase() === "student" &&
//             user.section === sectionId
//         );
//         setStudents(studentList);
//         setAttendance(new Array(studentList.length).fill(false));
//         setCurrentStudents(studentList.map((student, index) => ({ ...student, attendance: false })));
//       })
//       .catch((error) => {
//         console.log("Error fetching student data:", error);
//       });
//   }, [sectionId,subjectId]);
//      const markAttendance = () => {
   
//      services.user
//       .markattendance({
//         sectionId,
//         subjectId,
//         attendance,
//       })
//       .then((res) => {
//         console.log("Attendance marked successfully:", res.data);
//         alert("attendance marked successfully");
//         // Implement this logic
//           setAttendanceSubmitted(true);
//         localStorage.setItem(`attendanceSubmitted_${sectionId}${subjectId}`, true);
//         // Update the attendance status in currentStudents
//         const updatedStudents = [...currentStudents];
//         updatedStudents.forEach((student, index) => {
//           student.attendance = attendance[index];
//         });
//         setCurrentStudents(updatedStudents);
//         console.log("students:", students); // Debugging
//         console.log("attendance:", attendance);
        
//       })
    
//       .catch((error) => {
//         console.log("Error marking attendance:", error);
//       });
   
//   };
 
  
//   const goToPreviousStudent = () => {
//     if (currentStudentIndex > 0) {
//       setCurrentStudentIndex(currentStudentIndex - 1);
//     }
//   };
//   const handleAttendanceChange = (status) => {
//     const updatedCurrentStudents = [...currentStudents];
//     updatedCurrentStudents[currentStudentIndex].attendance = status;
//     setCurrentStudents(updatedCurrentStudents);
    
//   const updatedAttendance = [...attendance];
//   updatedAttendance[currentStudentIndex] = status;
//   setAttendance(updatedAttendance);

//     const nextStudentIndex = currentStudentIndex + 1;
//     if (nextStudentIndex < students.length) {
//       setCurrentStudentIndex(nextStudentIndex);
//     }
   
            
//   };
//   // const calculateAttendanceStats = () => {
//   //       let presentCount = 0;
//   //       let absentCount = 0;
//   //       let unmarkedCount = 0;
    
//   //       attendance.forEach((status) => {
//   //         if (status === true) {
//   //           presentCount++;
//   //         } else if (status === false) {
//   //           absentCount++;
//   //         } else {
//   //           unmarkedCount++;
//   //         }
//   //       });
    
//   //       return { presentCount, absentCount, unmarkedCount };
//   //     };
    
//   //     const attendanceStats = calculateAttendanceStats();
  

//   return (
//     <Wrapper>
//       <h1>Mark Attendance</h1>
//       <div className="underline"></div>
//       <div className="inner">
//         <div className="student-carousel">
//           {currentStudents.map((student, index) => (
//             <div
//               key={student.id}
//               className={`student-card ${
//                 index === currentStudentIndex ? "current" : ""
//               }`}
//             >
             
//               <img src={ student.photoUrl || defaultplaceholder} alt={student.name} />
//               <p>{student.name}</p>
          
//               <div className="attendance-buttons">
//                 <button id="presentbutton"
//                   className={student.attendance === "true" ? "present" : ""}
//                   onClick={() => handleAttendanceChange(true)}
                  
//                 >
//                   Present
//                 </button>
//                 <button id="absentbutton"
//                   className={student.attendance === "false" ? "absent" : ""}
//                   onClick={() => handleAttendanceChange(false)}
                
//                 >
//                   Absent
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <div className="attendance-stats">
//         <p>Total Students: {attendanceStats.students.length}</p>
//         <p>Marked Present: {attendanceStats.presentCount}</p>
//         <p>Marked Absent: {attendanceStats.absentCount}</p>
//         <p>Unmarked: {attendanceStats.unmarkedCount}</p>
//       </div> */}
//         <button
//   className="prev-button"
//   onClick={goToPreviousStudent}
//   disabled={currentStudentIndex === 0}
// >
//   Previous
// </button>
//       </div>
//       <button
//         className="mark-button"
//         onClick={markAttendance}
//         disabled={attendanceSubmitted || localStorage.getItem(`attendanceSubmitted_${sectionId}${subjectId}`,true)}
//       >
//         Submit Attendance
//       </button>
//       <ViewAttendance
//         sectionId={sectionId}
//         subjectId={subjectId}
//         students={currentStudents}
//       />
//     </Wrapper>
//   );
// };

// // export default AttendanceSheet;
// import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import { Wrapper } from "./style";
// import ViewAttendance from "../viewAttendance";
// import defaultplaceholder from "../assets/defaultplaceholder.png";

// const AttendanceSheet = () => {
//   let sectionId = new URLSearchParams(window.location.search).get("sectionId");
//   let subjectId = new URLSearchParams(window.location.search).get("subjectId");

//   useEffect(() => {
//     if (!localStorage.getItem("USER")) window.location = "/";
//   }, []);

//   const [students, setStudents] = useState([]);
//   const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
//   const [currentStudents, setCurrentStudents] = useState([]);
//   const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
//   const [attendance, setAttendance] = useState([]);

//   useEffect(() => {
//     const isAttendanceSubmitted = JSON.parse(
//       localStorage.getItem(`attendanceSubmitted_${sectionId}_${subjectId}`)
//     ) || false;

//     setAttendanceSubmitted(isAttendanceSubmitted);
//     services.user
//       .read()
//       .then((res) => {
//         const studentList = res.data.filter(
//           (user) =>
//             user.role &&
//             user.role.toLowerCase() === "student" &&
//             user.section === sectionId
//         );
//         setStudents(studentList);
//         setAttendance(new Array(studentList.length).fill(null));
//         setCurrentStudents(
//           studentList.map((student, index) => ({ ...student, attendance: null }))
//         );
//       })
//       .catch((error) => {
//         console.log("Error fetching student data:", error);
//       });
//   }, [sectionId, subjectId]);

//   const markAttendance = () => {
//     const updatedAttendance = [...attendance];
//     updatedAttendance[currentStudentIndex] = currentStudents[currentStudentIndex].attendance;

//     services.user
//       .markattendance({
//         sectionId,
//         subjectId,
//         attendance: updatedAttendance,
//       })
//       .then((res) => {
//         console.log("Attendance marked successfully:", res.data);
//         alert("Attendance marked successfully");
//         setAttendanceSubmitted(true);
//         localStorage.setItem(
//           `attendanceSubmitted_${sectionId}${subjectId}`,
//           true
//         );
//         const updatedStudents = [...currentStudents];
//                 updatedStudents.forEach((student, index) => {
//                   student.attendance = attendance[index];
//                 });
//                 setCurrentStudents(updatedStudents);
//                 console.log("students:", students); // Debugging
//                 console.log("attendance:", attendance);
        
        
//         }
//       )
//       .catch((error) => {
//         console.log("Error marking attendance:", error);
//       });
//   };

//   const goToPreviousStudent = () => {
//     if (currentStudentIndex > 0) {
//       setCurrentStudentIndex(currentStudentIndex - 1);
//     }
//   };

//   const handleAttendanceChange = (status) => {
//     const updatedCurrentStudents = [...currentStudents];
//     updatedCurrentStudents[currentStudentIndex].attendance = status;
//     setCurrentStudents(updatedCurrentStudents);
//     const nextStudentIndex = currentStudentIndex + 1;
        
//           if (nextStudentIndex < students.length) {
//             setCurrentStudentIndex(nextStudentIndex);
//           } 
//   };
  
  
//   return (
//     <Wrapper>
//       <h1>Mark Attendance</h1>
//       <div className="underline"></div>
//       <div className="inner">
//         <div className="student-carousel">
//           {currentStudents.map((student, index) => (
//             <div
//               key={student.id}
//               className={`student-card ${
//                 index === currentStudentIndex ? "current" : ""
//               }`}
//             >
//               <img
//                 src={student.photoUrl || defaultplaceholder}
//                 alt={student.name}
//               />
//               <p>{student.name}</p>
//               <div className="attendance-buttons">
//                 <button id="presentbutton"
//                   className={student.attendance === true ? "present" : ""}
//                   onClick={() => handleAttendanceChange(true)}
//                 >
//                   Present
//                 </button>
//                 <button id="absentbutton"
//                   className={student.attendance === false ? "absent" : ""}
//                   onClick={() => handleAttendanceChange(false)}
//                 >
//                   Absent
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
       
//         <button
//           className="prev-button"
//           onClick={goToPreviousStudent}
//           disabled={currentStudentIndex === 0}
//         >
//           Previous
//         </button>
//       </div>
//       <button
//         className="mark-button"
//         onClick={markAttendance}
//         disabled={
//           attendanceSubmitted ||
//           localStorage.getItem(`attendanceSubmitted_${sectionId}${subjectId}`, true)
//         }
//       >
//         Submit Attendance
//       </button>
//       <ViewAttendance
//         sectionId={sectionId}
//         subjectId={subjectId}
//         students={currentStudents}
//       />
//     </Wrapper>
//   );
// };

// export default AttendanceSheet;

