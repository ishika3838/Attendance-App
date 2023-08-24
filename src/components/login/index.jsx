
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./style";
import { services } from '../../services'
import contact_icon from "../assets/phone-call.png";
import password_icon from "../assets/padlock_icon.png";

const Login = ({ role  }) => {
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleLogin(contact,password)
    console.log("Logging in with:", contact, password);
    e.target.value = "wait";
    e.target.disabled = "true";
    

      // Make API call to authenticate the user
      
    services.user.login({
      contact, password
    }).then((response) => {
        console.log(response.data);
        console.log(role);
        
        console.log(response.data.user.role);
        alert("Logged In Succesfully ");
        if (response.data.user.role === "student") {
          navigate("/studentdashboard");
        } else {
          navigate("/facultydashboard");
        }
      })
      .catch((error) => {
        console.error("Error in login user:", error);
        alert("Login failed. Please check your credentials.");
      })
      .finally(() => {
        e.target.value = "signup";
        e.target.disabled = "false";
        setPassword("");
        setContact("");
      });
 
  };

  return (
    <Wrapper className="maincontainer">

      <div className="container">
      <div className="header">

     <h1>AttendEase</h1></div>
     <div className="underline"></div>
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={contact_icon} alt="contact_icon" />
              <input
                type="text"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="contact_icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
          </div>
        </form>

        <p>
          Not registered yet? <Link to="/home">Register Here</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;
// if (response.data.bsuccess) {
//   setrole(response.data.role);

//   if (response.data.role === "student") {
//     navigate(`/dashboard/student-profile/${currentUser.username}`);
//   } else {
//     navigate("/dashboard/faculty");
//   }
// } else {
//   alert("Login failed. Please check your credentials.");
// }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   e.target.value = 'singingin';
//   e.target.disabled = 'true';

//   try {
//     await handleLogin(contact, password, role, setrole);

//     // Since handleLogin is async and will update the state (current user and selected role),

//     // // you can access the updated values directly here
//     if (role === 'student') {
//       navigate(`/dashboard/student-profile`);
//     } else if (role === 'faculty') {
//       navigate('/dashboard/faculty');
//     } else {
//       // Handle other roles or conditions here
//      }
//   } catch (error) {
//     console.error('Error during login:', error);
//     alert('Login failed. Please try again.');
//   } finally {
//     e.target.value = 'signup';
//     e.target.disabled = 'false';
//   }
// };
