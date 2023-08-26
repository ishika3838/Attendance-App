import React, { useEffect, useState } from "react";
import { services } from "../../services";
import { Wrapper } from "./style";
const StudentProfile = ({ user }) => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    if (user) {
      services.user
        .getProfile(JSON.parse(window.localStorage.getItem("USER")).contact)
        .then((res) => {
          setStudentData(res.data.user);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [user]);

  return (
    <Wrapper>
      {studentData && (
        <div>
          <h3> Your Profile {studentData.name} !!</h3>
          {studentData.photoUrl && (
            <img
              width="120"
              height="120"
              src={studentData.photoUrl}
              alt="Profile"
            />
          )}
          <p>User Name: {studentData.name}</p>
          <p>Section: {studentData.section}</p>
          <p>Roll Number: {studentData.rollno}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default StudentProfile;
