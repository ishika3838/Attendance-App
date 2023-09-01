import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import StudentDashboard from "./components/studentDashboard";
import Faculty from "./components/faculty";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import AttendanceSheet from "./components/attendancesheet";
import NotFoundPage from "./components/notFoundPage";
import ForgotPassword from "./components/forgotPassword";
import ViewAttendance from "./components/viewAttendance";
import StudentAttendanceView from "./components/studentViewAttendance";

const initialUsers = [

];
const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [role, setSelectedRole] = useState("student");

  const handleRegister = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route
            path = "/home"
            element={<Homepage role={role} setSelectedRole={setSelectedRole} />}
          />
          <Route
            path="/register"
            element={
              <Register
              handleRegister={handleRegister}
              role={role}
              setSelectedRole={setSelectedRole}
              />
            }
          />
          <Route path = "/" element={<Login role={role} />} />
          <Route path = "/resetPassword" element={<ForgotPassword />} />
          <Route
            path="/studentdashboard"
            element={
              <StudentDashboard
                setSelectedRole={setSelectedRole}
                
              />
            }
          />

          <Route
            path = "/facultydashboard"
            element={<Faculty setSelectedRole={setSelectedRole} />}
          />
          <Route
            path="/attendanceSheet"
            element={<AttendanceSheet role={role} />}
          />
           <Route
            path="/view-attendance"
            element={<ViewAttendance />}
          />
          <Route path="/student-view" element={<StudentAttendanceView/>}/>
          
          <Route path = "/*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};


export default App;
