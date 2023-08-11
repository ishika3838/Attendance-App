import React from 'react';

const StudentProfile=({ user })=> {
  return (
    <div>
      <h3>Student Profile</h3>
      <img width="120" height="120" src="https://img.icons8.com/ios-glyphs/90/user--v1.png" alt="user--v1"/>
      <p>Username: {user.username}</p>
      <p>Year: {user.year}</p>
      <p>Branch: {user.branch}</p>
      <p>Rollnumber: {user.rollno}</p>
    </div>
  );
}

export default StudentProfile;
