import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import StudentDashboard from "./components/studentDashboard";
import Faculty from "./components/faculty";
import StudentProfile from "./components/studentProfile";
import Homepage from "./components/homepage";
import Footer from "./components/footer";

const initialUsers = [
  {
    username: "student1",
    password: "student1",
    role: "student",
    year: "1",
    rollno: "304",
    branch: "Branch A",
    attendance: [],
  },
  {
    username: "student2",
    password: "student2",
    role: "student",
    year: "",
    rollno: "",
    branch: "",
    attendance: [],
  },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('student');

  

  const handleRegister = (user) => {
    
      setUsers([...users, user]);
    
  };
  

  const handleLogin = (contact,password) => {
    const user = users.find(
      (u) =>   u.contact === contact && u.password === password );
     
    if (user) {
        
        setCurrentUser(user);
      } 
   
    else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App"> 
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {currentUser ? (
              <>
                {currentUser.role === "student" && (
                  <li>
                    <Link
                      to={`/dashboard/student-profile/${currentUser.username}`}
                    >
                      View Profile
                    </Link>
                  </li>
                )}
                {currentUser.role === "faculty" && (
                  <li>
                    <Link to="/dashboard/faculty">Faculty Dashboard</Link>
                  </li>
                )}
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>  */}
        <Routes>
        <Route path="/" element={<Homepage selectedRole={selectedRole}
              setSelectedRole={setSelectedRole} />} />
  
          
          <Route
            path="/register"
            element={<Register handleRegister={handleRegister} selectedRole={selectedRole}   />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          
          <Route
            path="/dashboard/*"
            element={
              currentUser ? (
                currentUser.role === "student" ? (
                  <StudentDashboard
                    user={currentUser}
                    handleLogout={handleLogout}
                  />
                ) : (
                  <Faculty users={users} handleLogout={handleLogout} />
                )
              ) : (
                <p>Please log in to access the dashboard.</p>
              )
            }
          />
          <Route
            path="/dashboard/student-profile/:username"
            element={
              currentUser && currentUser.role === "student" ? (
                <StudentProfile user={currentUser} />
              ) : (
                <p>Access denied.</p>
              )
            }
          />
          <Route
            path="/dashboard/faculty/*"
            element={
              currentUser && currentUser.role === "faculty" ? (
                <Faculty users={users} handleLogout={handleLogout} />
              ) : (
                <p>Access denied.</p>
              )
            }
          />
          
        </Routes>
      </div>

      <Footer /> 
    </Router>
  );
};

export default App;
//("link",{ name,contact,password,role}).then(res=>{res.data....,
//res.data.besuccess=''true' conosle }).catch(err=>{}).finally(()=>{sbko set empty ,button work disabled})--request
