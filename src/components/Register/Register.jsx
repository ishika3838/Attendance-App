import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Register=({ handleRegister })=> {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const[rollno, setId] = useState(0);
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ username, password, role, rollno, year, branch, attendance: [] });
    setUsername('');
    setPassword('');
    setYear('');
    setId('');
    setBranch('');
    navigate("/login")
    
  };



  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        {role === 'student' && (
          <div>
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="Number"
              placeholder="Rollnumber"
              value={rollno}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Register</button>
      </form>
     
    
    </div>
    
  );
}

export default Register;