
import React from 'react';


 const StudentDashboard=({  handleLogout })=> {
  return (
    <div>
      <h2>Student Dashboard</h2>
      {/* <p>Welcome, {user.username}!</p>
      <p>Year: {user.year}</p>
      <p>Branch: {user.branch}</p> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default StudentDashboard;