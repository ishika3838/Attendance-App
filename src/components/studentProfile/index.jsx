import React from 'react';

const StudentProfile=({ user })=> {
  return (
    <div>
      <h3>Student Profile</h3>
      {user.photoUrl && (
        <img width="120" height="120" src={user.photoUrl} alt="Profile" />
      )}
      <p>Username: {user.username}</p>
      <p>Year: {user.year}</p>
      <p>Branch: {user.branch}</p>
      <p>Rollnumber: {user.rollno}</p>
    </div>
  );
}

export default StudentProfile;
