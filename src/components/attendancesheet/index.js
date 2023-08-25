// import React, { useEffect, useState } from 'react'
// import { services } from '../../services'

// const AttendanceSheet = () => {
 
//   let sectionId = new URLSearchParams(window.location.search).get('sectionId');
//   let subjectId = new URLSearchParams(window.location.search).get('subjectId');
  
//     let date = new Date();
//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   let Attendance = {
//     sectionId: "",   // Will be replaced with the selected section ID
//     subjectId: "",   // Will be replaced with the selected subject ID
//     attendance: {
//       sectionId:{
//         subjectId:{
//           date:["true","false","true","false"]
//         }
//       }
//     }  // An array of true/false values for attendance
//   };
//     // let Attendance = {
//     //   sectionId:"",
//     //   subjectId:"",
//     //   Attendance:{
//     //     sectiontId:{
//     //           subjectId:{
//     //             date:["true", "false"]
//     //           }
//     //     }
//     //   }
            
//     // }
    
//     useEffect(() => {
//       services.user.read()
//       .then(res => {
//           setStudents(res.data.filter(user => user.role && user.role.toLowerCase() === 'student' 
//         ))
//         setAttendance(new Array(students.length).fill(false));
//       })
    
//   },  [])
//     const mark = (studentId, status) => {
//       // Create the attendance array with true and false values
//       //const newAttendance = students.map(student => (student.id === studentId ? status : false));
  
//       // Create the payload for the API
//       const payload = {
//         sectionId: sectionId,
//         subjectId: subjectId,
//         attendance: attendance
//       };
  
//       // Call the API to mark attendance
//       services.user.markattendance({payload})
//       .then(res => {
//         console.log('Attendance marked successfully:', res.data);
//       })
//       .catch(error => {
//         console.error('Error marking attendance:', error);
//       });
//   };
  
      
      
   
     
    
//   return (
//     <div>
//       {
//         students.map(student  => <div key={student.id}>{student.name}
//          <button onClick={() => mark(student.id, true)}> Present</button>
//           <button onClick={() => mark(student.id, false)}> Absent</button></div>)
        
//       }
//       </div>
        
        
       
//     )
// }

// export default AttendanceSheet
import React, { useEffect, useState } from 'react';
import { services } from '../../services';

import { useNavigate } from 'react-router-dom';


const AttendanceSheet = () => {
  let sectionId = new URLSearchParams(window.location.search).get('sectionId');
  let subjectId = new URLSearchParams(window.location.search).get('subjectId');
  let date = new Date();
  let Attendance = {
        sectionId: "",   // Will be replaced with the selected section ID
        subjectId: "",   // Will be replaced with the selected subject ID
        attendance: {
          sectionId:{
            subjectId:{
              date:["true" ,"false" ,"true" ,"false"]
            }
          }
        }
      }
  const[students, setStudents] = useState([])
  const[attendance, setAttendance] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    services.user.read()
      .then(res => {
        const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student' && user.section === sectionId);
        setStudents(studentList);
        setAttendance(new Array(studentList.length).fill(false));
         
      })
      .catch(error => {
        console.log('Error fetching student data:', error);
      });
  }, [sectionId]);

  const markAttendance = () => {
    services.user.markattendance({
      sectionId, subjectId , attendance,
    })
      .then(res => {
        console.log('Attendance marked successfully:', res.data);
        
      })
      .catch(error => {
        console.log('Error marking attendance:', error);
      });
  };
 

  const view = () => {
    navigate(`/viewAttendance students=${students}`);
  }
  
  const toggleAttendance = (studentIndex, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[studentIndex] = status;
    setAttendance(updatedAttendance);
  };

  return (
    <div className="attendance-sheet">
      <h1>Mark Attendance</h1>
      {students.map((student, index) => (
        <div className="student-row" key={student.id}>
          <div className="student-info">
            <img src={student.photoUrl} alt={student.name} />
            <p>{student.name}</p>
          </div>
          <div className="attendance-buttons">
            <button
              className={attendance[index] === true ? "present" : ""}
              onClick={() => toggleAttendance(index, true)}
            >
              Present
            </button>
            <button
              className={attendance[index] === false ? "absent" : ""}
              onClick={() => toggleAttendance(index, false)}
            >
              Absent
            </button>
          </div>
        </div>
      ))}
      <button className="mark-button" onClick={markAttendance}>Submit Attendance </button>
      <button className="view-button" onClick={view}>View attendance-list</button>
    

    
    </div>
  );
};


export default AttendanceSheet;

