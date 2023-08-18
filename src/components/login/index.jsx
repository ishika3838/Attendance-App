import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login=({ handleLogin  }) =>{
  //const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contact,setContact] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('Logging in with:', contact, password);
    e.target.value="singingin";
    e.target.succeed='true';
    handleLogin(contact,password);
    axios
      .post('https://server-api1-li2k.onrender.com/api/user/login', {contact,password})
      .then((response) => {
       console.log(response.data)
       if (response.data.besucceed) {
        localStorage.setItem('authToken', response.data.authToken);
        
        if (response.data.role === 'student') {
          navigate(`/dashboard/student-profile/${response.data.username}`);
        } else {
          navigate('/dashboard/faculty');
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
      })
      .catch((error) => {
        console.error('Error in login user:', error);
      })
      .finally(() => {
        e.target.value="signup";
        e.target.succeed='false';
        //setUsername('');
        setPassword('');
        setContact('');
      });
   
      
    // if(role === 'student'){
    // navigate(`/dashboard/student-profile/${currentUser.username})`)}
    // else{
    //   navigate('/dashboard/faculty');
    // }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Not registered yet? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
