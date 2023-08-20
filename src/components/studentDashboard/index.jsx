
import React from 'react';


 const StudentDashboard=({ setSelectedRole })=> {
  const handleLogout =()=>{
    setSelectedRole('');
    window.location='/';
  }
  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Welcome! </p>
      {/* <p>Year: {user.year}</p>
      <p>Branch: {user.branch}</p>  */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default StudentDashboard;