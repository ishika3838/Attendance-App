import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
    branch: "Computer Science Engineering",
    section:"A",
    attendance: [],
  },
  {
    username: "student2",
    password: "student2",
    role: "student",
    year: "",
    rollno: "",
    branch: "Information Technology",
    section:"A",
    attendance: [],
  },
];
const App = () => {
  const [users, setUsers] = useState(initialUsers);
   const [currentuser, setCurrentUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("student");

  const handleRegister = (user) => {
    setUsers([...users, user]);
  };
    const handleLogin =(contact,password)=>{
   const user = users.find((u) => u.contact === contact && u.password === password);
       setCurrentUser(user);
    }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                handleRegister={handleRegister}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            }
          />
          <Route
            path="/login"
            element={<Login selectedRole={selectedRole} handleLogin={handleLogin} />}
          />
          <Route
            path="/studentdashboard"
            element={<StudentDashboard setSelectedRole={setSelectedRole} />}
          />
          <Route
            path="/facultydashboard"
            element={
              <Faculty users={users} setSelectedRole={setSelectedRole} />
            }
          />

          <Route
            path="/studentdashboard/student-profile"
            element={<StudentProfile users={users} />}
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
//   const handleLogin =(contact,password)=>{
  //  const user = users.find((u) => u.contact === contact && u.password === password);
  //      setCurrentUser(user);
  //   }

  //   else {
  //     alert("Invalid username or password.");
  //   }

//   const handleLogout = () => {
//     setCurrentUser(null);
//   };

//   return (
//     <Router>
//       <div className="App">
//        <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             {currentUser ? (
//               <>
//                 {currentUser.role === "student" && (
//                   <li>
//                     <Link
//                       to={`/dashboard/student-profile/:username`}
//                     >
//                       View Profile
//                     </Link>
//                   </li>
//                 )}
//                 {currentUser.role === "faculty" && (
//                   <li>
//                     <Link to="/dashboard/faculty">Faculty Dashboard</Link>
//                   </li>
//                 )}
//                 <li>
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//                 <li>
//                   <Link to="/register">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>

//         <Routes>
//         <Route path="/" element={<Homepage selectedRole={selectedRole}
//               setSelectedRole={setSelectedRole} />} />

//           <Route
//             path="/register"
//             element={<Register handleRegister={handleRegister} selectedRole={selectedRole} setSelectedRole={setSelectedRole}  />}
//           />
//           <Route path="/login" element={<Login handleLogin={handleLogin}  selectedRole={selectedRole} setSelectedRole={setSelectedRole} />} />

//           <Route
//             path="/dashboard/*"
//             element={
//               currentUser ? (
//                 currentUser.role === "student" ? (
//                   <StudentDashboard
//                     user={currentUser}
//                     handleLogout={handleLogout}
//                   />
//                 ) : (
//                   <Faculty users={users} handleLogout={handleLogout} />
//                 )
//               ) : (
//                 <p>Please log in to access the dashboard.</p>
//               )
//             }
//           />
//           <Route
//             path="/dashboard/student-profile/:username"
//                         element={
//                   currentUser && currentUser.role === 'student' ? (
//                <StudentProfile user={currentUser} />
//                 ) : (
//              <Navigate to="/" /> // Redirect to home if access is denied
//               )
//              }
//                />
//           <Route
//             path="/dashboard/faculty/*"
//             element={
//               currentUser && currentUser.role === "faculty" ? (
//                 <Faculty users={users} handleLogout={handleLogout} />
//               ) : (
//                 <p>Access denied.</p>
//               )
//             }
//           />

//         </Routes>
//       </div>

//       <Footer />
//     </Router>
//   );
// };

//("link",{ name,contact,password,role}).then(res=>{res.data....,
//res.data.besuccess=''true' conosle }).catch(err=>{}).finally(()=>{sbko set empty ,button work disabled})--request
// const handleLogin = async (contact, password,selectedRole,setSelectedRole) => {
//   try {
//     const response = await axios.post(
//       "https://server-api1-li2k.onrender.com/api/user/login",
//       {
//         contact: contact,
//         password: password,
//       }
//     );
//     console.log(response.data);

//     if (response.data.bsuccess) {
//       //const user = users.find((u) => u.contact === contact && u.password === password);
//      // setCurrentUser(response.data.user);
//      const user = response.data.user; // Assuming your API response has user data
//     setCurrentUser(user);
//     setSelectedRole(response.data.role);
//       //setCurrentUser(user); // Set the current user from the local users array
//      // setSelectedRole(response.data.role);
//       // Set the selected role here

//     } else {
//       alert('Login failed. Please check your credentials.');
//     }
//   } catch (error) {
//     console.error('Error in login user:', error);
//   } finally {
//     setPassword('');
//     setContact('');
//   }
// };
//  {/*
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {selectedRole === "student" && (
//             <li>
//               <Link to="/dashboard/student-profile">View Profile</Link>
//             </li>
//           )}
//           {selectedRole === "faculty" && (
//             <li>
//               <Link to="/dashboard/faculty">Faculty Dashboard</Link>
//             </li>
//           )}
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <button onClick={handleLogout}>Logout</button>
//           </li>
//         </ul>
//       </nav>   */
//     }
//     {/* <Route
//          path="/dashboard"
//          element={
//           selectedRole === 'student' ? (
//               <StudentDashboard />
//             ) : selectedRole === 'faculty' ? (
//             <Faculty users={users}  />
//     ) : (
//       <Navigate to="/login" /> // Redirect if selectedRole is not recognized
//     )
//   }
// />
//  */}
// {/* <Route
//   path="/dashboard/student-profile"
//   element={
//     selectedRole === 'student' ? (
//       <StudentProfile users={users}/>
//     ) : (
//       <p>Acess Denied</p> // Redirect to home if access is denied
//     )
//   }
// /> */}
// {/* <Route
//   path="/dashboard/student-profile"
//   element={

//       <StudentProfile />

//   }
// /> */}
// {/* <Route
//   path="/dashboard/faculty/*"
//   element={
//       selectedRole === 'faculty' ? (
//         <Faculty users={users}  />
//         ) : (<p>please login to access it</p>)
//   }
// />*/}
