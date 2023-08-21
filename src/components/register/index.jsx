import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from './style';
import user_icon from '../assets/user_icon.png'
import contact_icon from '../assets/contact_icon_n.png'
import pass from '../assets/padlock_icon.png'
import confirm_pass from '../assets/confirm_pass.png'

const Register=({ handleRegister,selectedRole,setSelectedRole })=> {
 
  const [username, setUsername] = useState('');
  const [contact,setContact] = useState('');
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
      contact,
      role: selectedRole,
      rollno: selectedRole === 'student' ? rollno : '',
      year: selectedRole === 'student' ? year : '',
      branch: selectedRole === 'student' ? branch : '',
      section: setSection ==='student' ? section:'',
      subject: selectedRole === 'faculty' ? subject : '',
      photoUrl:selectedRole === 'student' ? photoUrl: '',
      attendance: [],
    };
    
    e.target.value="registering";
    e.target.disabled='true';
    axios
      .post('https://server-api1-li2k.onrender.com/api/user/add', {username,contact,password,selectedRole})
      .then((response) => {
       console.log(response.data)
       console.log(selectedRole);
       alert("successfully registered")
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      })
      .finally(() => {
        e.target.value="signup";
        e.target.disabled='false';
        setUsername('');
        setContact('');
        setPassword('');
        setSelectedRole('');
        
      });

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
    <Wrapper>
<div className='container'>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

    <div className='input'>

    <img src={user_icon} alt='user_icon'/>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          </div>

      <div className='input'>

      <img src={contact_icon} alt='contact_icon'/>
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          />
          </div>

<div className='input'>

<img src={pass} alt='password_icon'/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
     
     />
        

<img src={confirm_pass} alt='confirmpass_icon'/>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>

        {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select> */}

        {selectedRole === 'student' && (
          <div>

<div className='input'>

<img src={user_icon} alt='user_icon'/>
            <input
              type="text"
              placeholder="Rollnumber"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              />
              </div>

        <div className='input'>

          
            

              <img src={user_icon} alt='user_icon'/>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="" selected disabled>--Select Year--</option>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                
              </select>
            
        </div>

        <div className='input'>

          

              <img src={user_icon} alt='user_icon'/>
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                <option value="" selected disabled>--Select Branch--</option>
                <option value="Computer Science Engineering">Computer Science Engineering</option>
                <option value="Information Technology">Information Technology</option>
                
              </select>
            
        </div>
           

            <div className='input'>


            

              <img src={user_icon} alt='user_icon'/>
              <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="" selected disabled>Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
             
              </select>
           
            </div>
          </div>
        )}
        {/* {selectedRole === 'faculty' && (
          <div>
            

   <div className='input'>


            
              <img src={user_icon} alt='user_icon'/>
              <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="" selected disabled>--Select Subject--</option>
                <option value="subject1">Dbms</option>
                <option value="subject2">Oops</option>
              
              </select>
            
   </div>
            

   <div className='input'>


              

                  <img src={user_icon} alt='user_icon'/>
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                <option value="" selected disabled>--Select Branch--</option>
                <option value="branch1">Computer Science Engineering</option>
                <option value="branch2">Information Technology</option>
               
              </select>
           
   </div>

    <div className='input'>

    <img src={user_icon} alt='user_icon'/>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="" selected disabled>--Select Year--</option>
                <option value="year1">1 Year</option>
                <option value="year2">2 Year</option>
                <option value="year2">3 Year</option>
                <option value="year2">4 Year</option>
             
              </select>
          
    </div>
            </div>
        )}
           */}

   <div className='input'>

   <img src={user_icon} alt='user_icon'/>
          Choose Profile Photo:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoUrl(URL.createObjectURL(e.target.files[0]))}
            />
        {/* </label> */}
            </div>
        <button type="submit">Register</button>
      </form>
     
    
            </div>      
    </Wrapper>
    
  );
}

export default Register;