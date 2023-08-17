import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Register=({ handleRegister,selectedRole })=> {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rollno, setRollno] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState(''); 
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [photoUrl,setPhotoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    const user = {
      username,
      password,
      role: selectedRole,
      rollno: selectedRole === 'student' ? rollno : '',
      year: selectedRole === 'student' ? year : '',
      branch: selectedRole === 'student' ? branch : '',
      section: setSection ==='student' ? section:'',
      subject: selectedRole === 'faculty' ? subject : '',
      photoUrl:selectedRole === 'student' ? photoUrl: '',
      attendance: [],
    };

    handleRegister(user);

    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setRollno('');
    setYear('');
    setSubject(''); 
    setBranch('');
    setPhotoUrl('');
    alert('Registration successful! Please proceed to login.');
    navigate('/login');
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select> */}
        {selectedRole === 'student' && (
          <div>
            <input
              type="text"
              placeholder="Rollnumber"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
            />
            <label>
              Select Year:
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="year1">1 Year</option>
                <option value="year2">2 Year</option>
                <option value="year2">3 Year</option>
                <option value="year2">4 Year</option>
                {/* Add more years here */}
              </select>
            </label>
            
            <label>
              Select Branch:
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                <option value="">Select Branch</option>
                <option value="branch1">Computer Science Engineering</option>
                <option value="branch2">Information Technology</option>
                {/* Add more branches here */}
              </select>
            </label>
            <label>
              Select Section:
              <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                {/* Add more years here */}
              </select>
            </label>
          </div>
        )}
        {selectedRole === 'faculty' && (
          <div>
            <label>
              Select Subject:
              <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="">Select Subject</option>
                <option value="subject1">Dbms</option>
                <option value="subject2">Oops</option>
                {/* Add more subjects here */}
              </select>
            </label>
            <label>
              Select Branch:
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                <option value="">Select Branch</option>
                <option value="branch1">Computer Science Engineering</option>
                <option value="branch2">Information Technology</option>
                {/* Add more branches here */}
              </select>
            </label>
            <label>
              Select Year:
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="year1">1 Year</option>
                <option value="year2">2 Year</option>
                <option value="year2">3 Year</option>
                <option value="year2">4 Year</option>
                {/* Add more years here */}
              </select>
            </label>
            </div>
        )}
          <label>
          Choose Profile Photo:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoUrl(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <button type="submit">Register</button>
      </form>
     
    
    </div>
    
  );
}

export default Register;