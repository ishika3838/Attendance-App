 import React from 'react';
 import { slide as Menu } from 'react-burger-menu';
 import { Wrapper } from './style';
 import { useState ,useEffect} from 'react';
 import { services } from '../../services';
 import { useNavigate } from 'react-router-dom';
 import search_icon from '../assets/search.png'

function Faculty({setSelectedRole}) {
  const [sections, setSections] = useState([])
  
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections)
  const navigate = useNavigate();
 
  useEffect(() => {
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
    })
    
   
  },[])
      
  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = () => {
    if(selectedSection && selectedSubject){
    navigate(`/attendanceSheet?sectionId=${selectedSection}&subjectId=${selectedSubject}`)}
    else {
      alert('Please select both subject and section before proceeding.');
    }
  }
  const handleLogout = () => {
       setSelectedRole('');
         window.location = '/';
      };
  return(
    <Wrapper>
      
      <h2>Attendance</h2>
      <Menu left>
        <a href="#teacher-profile">My Profile</a>
        <a href="#mark-attendance">Mark Attendance</a>
        <a href="#view-attendance">View Attendance</a>
        <a href="#feedback">Feedback</a>
        <a href="#logout" onClick={handleLogout}>Logout</a>
      </Menu>
      <section>
      <div className="inner">
        <div className='imginner'>
       <img src={search_icon} alt='search_icon'/>   
      <input
        type="search"
        placeholder='Filter the sections here ...'
        onChange={filter}
      /></div>

      {/* <div className="sections">
      {
        filteredSections.map(section => <input type="button" key={section.id} className='section' value={section.name} onClick={e => gotoSheet(section)}
         />)
        
      }
      </div>
       */}
       <div className="sections">
            <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="Dbms">Dbms</option>
              <option value="OOPS">OOPS</option>
              {/* Add more subjects as needed */}
            </select>
            {filteredSections.map(section => (
              <div key={section.id} className="section">
                <input type="button" value={section.name} onClick={() => setSelectedSection(section.id)} />
              </div>
            ))}
            <button onClick={gotoSheet}>Go to Attendance Sheet</button>
          </div>
        </div>
      </section>
    
      </Wrapper>)

}
export default  Faculty;

  // import StudentSlider from '../studentslider';
// import ViewAttendance from '../viewAttendance'
// import StudentAttendance from '../studentattendance';
 
// function Faculty({ users, setSelectedRole }) {
//   const [attendanceData, setAttendanceData] = useState({});
//   const [selectedBranch, setselectedBranch] = useState('');
//   const [selectedSubject , setselectedSubject] = useState('')
//   const [selectedSection, setselectedSection] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [submitted, setSubmitted] = useState(false); // Track if attendance is submitted
  

//   const studentUsers = users.filter(
//     (user) =>
//       user.role === 'student' &&
//       user.branch === selectedBranch &&
//       user.section === selectedSection
//   );

//   const markAttendance = (username, status) => {
//     if (submitted) {
//       alert('Attendance has already been submitted. Cannot mark attendance.');
//       return;
//     }

//     const currentDate = new Date().toISOString().split('T')[0];
//     // const studentAttendance = attendanceData[username] || [];
//     // const attendanceForDate = studentAttendance.find(a => a.date === currentDate);
//     // if (attendanceForDate) {
//     //   alert('Attendance for this date has already been marked.');
//     //   return;
//     // }

//     const updatedAttendance = {
//             ...attendanceData,
//             [username]: [...(attendanceData[username] || []), { date: currentDate, status }],
//            };
//     setAttendanceData(updatedAttendance);
//     console.log(updatedAttendance);
//     localStorage.setItem('attendanceData', JSON.stringify(updatedAttendance));
  
//   };
//   const handleSubmit = () => {
//     setSubmitted(true);
    
//   }
  

//   const handleStudentClick = (student) => {
//     setSelectedStudent(student);
//   };
  
//   const handleLogout = () => {
//     setSelectedRole('');
//     window.location = '/';
//   };

//   return (
//     <Wrapper>
//       <h2>Faculty Dashboard</h2>
//       <div>
//         {/* ... Select Subject, Branch, Section inputs */}
//         <div className="input">
              
//               <select
//                   value={selectedSubject}
//                   onChange={(e) => setselectedSubject(e.target.value)}
//                 >
//                   <option value="" selected disabled>
//                     --Select Subject--
//                   </option>
//                   <option value="Dbms">Dbms</option>
//                   <option value="Oops">Oops</option>
//                 </select>
//               </div>

//               <div className="input">
                
//                 <select
//                   value={selectedBranch}
//                   onChange={(e) =>setselectedBranch(e.target.value)}
//                 >
//                   <option value="" selected disabled>
//                     --Select Branch--
//                   </option>
//                   <option value="Computer Science Engineering">Computer Science Engineering</option>
//                   <option value="Information Technology">Information Technology</option>
//                 </select>
//               </div>

//               <div className="input">
                
//                 <select value={selectedSection} onChange={(e) => setselectedSection(e.target.value)}>
//                   <option value="" selected disabled>
//                     --Select Section--
//                   </option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                 </select>
//               </div>
//       </div>
//       <h3>Mark Attendance</h3>
//       <button type="button" onClick={handleSubmit} disabled={submitted}>
//                 Submit Attendance
//                 </button>
              
        
//           {/* Student Slider */}
//           <StudentSlider studentUsers={studentUsers} onStudentClick={handleStudentClick} markAttendance={markAttendance} submitted={submitted}/>
//           {/* View Attendance */}
//           {submitted && (
//           <ViewAttendance studentUsers={studentUsers} attendanceData={attendanceData} />
        
//       )}
//     {selectedStudent && (
//         <StudentAttendance student={selectedStudent} attendanceData={attendanceData} />
//       )}
//       <button type="submit" onClick={handleLogout}> 
//         Logout
//       </button>
//     </Wrapper>
//   );
// }

// export default Faculty;


// import React, { useState ,useEffect} from 'react';
// import ViewAttendance from '../viewAttendance';
// import { Wrapper } from './style';
// import Slider from 'react-slick';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// //import './Slider.css'; // Define your custom CSS styles here


// function Faculty({ users ,setSelectedRole }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [attendanceData, setAttendanceData] = useState({});
//   const [selectedBranch,setselectedBranch]=useState('');
//   const [selectedSection , setselectedSection] = useState('')
//   const [selectedSubject , setselectedSubject] = useState('')
// // Filter out faculty users from the list

//   const studentUsers = users.filter(user => user.role === 'student' && user.branch === selectedBranch && user.section === selectedSection);
//   const markAttendance = (username, status) => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     const updatedAttendance = {
//       ...attendanceData,
//       [username]: [...(attendanceData[username] || []), { date: currentDate, status }],
//     };
//     setAttendanceData(updatedAttendance);
//     console.log(updatedAttendance);

//   // Store updated attendance data in local storage
//     localStorage.setItem('attendanceData', JSON.stringify(updatedAttendance));
    
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex < studentUsers.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }, 5000); // Adjust the interval time as needed

//     return () => clearInterval(interval);
//   }, [currentIndex, studentUsers.length]);

//   // Handle undo functionality
//   const handleUndo = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };
//   const handleLogout =()=>{
//     setSelectedRole('');
//     window.location='/';
//   }
//   const slickSettings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     className: 'slider',
//   dotsClass: 'slick-dots',
//     vertical: false, 
//     //className: 'slider',
//   //dotsClass: 'slick-dots',
//   };


//   return (
//        <Wrapper>
//      <h2>Faculty Dashboard</h2>
     
//      <div>
//               <div className="input">
              
//                 <select
//                   value={selectedSubject}
//                   onChange={(e) => setselectedSubject(e.target.value)}
//                 >
//                   <option value="" selected disabled>
//                     --Select Subject--
//                   </option>
//                   <option value="Dbms">Dbms</option>
//                   <option value="Oops">Oops</option>
//                 </select>
//               </div>

//               <div className="input">
                
//                 <select
//                   value={selectedBranch}
//                   onChange={(e) =>setselectedBranch(e.target.value)}
//                 >
//                   <option value="" selected disabled>
//                     --Select Branch--
//                   </option>
//                   <option value="Computer Science Engineering">Computer Science Engineering</option>
//                   <option value="Information Technology">Information Technology</option>
//                 </select>
//               </div>

//               <div className="input">
                
//                 <select value={selectedSection} onChange={(e) => setselectedSection(e.target.value)}>
//                   <option value="" selected disabled>
//                     --Select Section--
//                   </option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                 </select>
//               </div>
//             </div>
//       <h3>Mark Attendance</h3>
//       <Slider {...slickSettings}>
//       <div className="slider-container">
//       <Carousel selectedItem={currentIndex} showArrows={false} showThumbs={false}>
//       {studentUsers.map(u => (
//         <div key={u.username} lassName="student-profile-container">
         
//           <img src={u.photoUrl} alt={u.username} />
//           <p>{u.username}</p>
//           <button className="green-button" onClick={() => {
//                 markAttendance(u.username, 'Present');
//                 setCurrentIndex(currentIndex + 1);
//               }}>Present</button>
//           <button className="red-button"onClick={() =>{ markAttendance(u.username, 'Absent');setCurrentIndex(currentIndex + 1);}}>Absent</button>
//           </div>
       
//       ))}
//       </Carousel>
//       <button className="undo-button" onClick={handleUndo}>
//         Undo
//       </button>
//     </div>
//       </Slider>
     
//       <ViewAttendance studentUsers={studentUsers} attendanceData={attendanceData} />
//       <button type="submit" onClick={handleLogout}>logout</button>
//       </Wrapper>
//   );
// }

// export default Faculty;


