import React, { useEffect, useState } from "react";
import { services } from "../../services";
import { Wrapper } from "./style";
const AttendanceSheet = () => {
  //get the selected subjectId and sectionId from url search
  let sectionId = new URLSearchParams(window.location.search).get("sectionId");
  let subjectId = new URLSearchParams(window.location.search).get("subjectId");

  useEffect(() => {
    if (!localStorage.getItem("USER"))
     window.location = "/";
  }, []);

  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    //Call teh api to read the details of user 
    services.user
      .read()
      .then((res) => {
        //Showing the student list on basis of selected sectionId and role
        const studentList = res.data.filter(
          (user) =>
            user.role &&
            user.role.toLowerCase() === "student" &&
            user.section === sectionId
        );
        setStudents(studentList);
        //created attendance array containing true false in its array on basis of status
        setAttendance(new Array(studentList.length).fill(false));
      })
      .catch((error) => {
        console.log("Error fetching student data:", error);
      });
  }, [sectionId]);

  const markAttendance = () => {
    //for marking attendance we have call teh api
    services.user
      .markattendance({
        sectionId,
        subjectId,
        attendance,
      })
      .then((res) => {
        console.log("Attendance marked successfully:", res.data);
        alert("attendance marked successfully");
      })
      .catch((error) => {
        console.log("Error marking attendance:", error);
      });
  };
  //Created toggleAttendance so that we can update the attendance of basis of student index and update their 
  //status there
  const toggleAttendance = (studentIndex, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[studentIndex] = status;
    setAttendance(updatedAttendance);
  };

  return (
    <Wrapper>
      <h1>Mark Attendance</h1>
      <div className="underline"></div>
      <div className="inner">
        {/* created a new array and mark their attendance on basis of their unique index no.*/}
        {students.map((student, index) => (
          <div className="student-row" key={student.id}>
            <div className="student-info">
              <img src={student.photoUrl} alt={student.name} />
              <p>{student.name}</p>
            </div>
            <div className="attendance-buttons">
              <button
                className={attendance[index] ? "present" : ""}
                onClick={() => toggleAttendance(index, true)}
              >
                Present
              </button>
              <button
                className={!attendance[index] ? "absent" : ""}
                onClick={() => toggleAttendance(index, false)}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mark-button" onClick={markAttendance}>
        Submit Attendance
      </button>
    </Wrapper>
  );
};

export default AttendanceSheet;
