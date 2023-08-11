import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import Faculty from "./components/Faculty/Faculty";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

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

  const handleRegister = (user) => {
    setUsers([...users, user]);
  };

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <h1>Attendance Management System</h1>
      <div className="App">
        <nav>
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
        </nav>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register handleRegister={handleRegister} />}
          />
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
