import React from 'react';

const StudentProfile=({ users })=> {
  return (
    <div>
      <h3>Student Profile</h3>
      {users.photoUrl && (
        <img width="120" height="120" src={users.photoUrl} alt="Profile" />
      )}
      <p>usersname: {users.usersname}</p>
      <p>Year: {users.year}</p>
      <p>Branch: {users.branch}</p>
      <p>Rollnumber: {users.rollno}</p>
    </div>
  );
}

export default StudentProfile;
