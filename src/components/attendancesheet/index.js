
import React, { useEffect, useState } from 'react';
import { services } from '../../services';



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
      {/* <button className="view-button" onClick={view}>View attendance-list</button> */}
    

    
    </div>
  );
};


export default AttendanceSheet;

