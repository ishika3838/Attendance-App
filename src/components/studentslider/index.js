// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
//  import 'react-responsive-carousel/lib/styles/carousel.min.css';
//  import { Wrapper } from './style';


// function StudentSlider({ studentUsers, markAttendance,onStudentClick,submitted}) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // Auto slide to the next student after attendance is marked
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex < studentUsers.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }, 4000); // Adjust the interval time as needed

//     return () => clearInterval(interval);
//   }, [currentIndex, studentUsers.length]);

  
//   // Handle undo functionality
//   const handleUndo = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <Wrapper className="slider-container">
//       <Carousel selectedItem={currentIndex} showArrows={false} showThumbs={false}>
//         {studentUsers.map((u) => (
//           <div key={u.username} className="student-profile" onClick={() => onStudentClick(u)}>
//             <img src={u.photoUrl} alt={u.username} />
//             <h4>{u.username}</h4>
           
//             <button
//               className="green-button"
//               onClick={() => {
//                 markAttendance(u.username, 'Present');
              
//                 setCurrentIndex(currentIndex + 1);
//               }}
//               disabled={!submitted}
//             >
//               Present
//             </button>
//             <button
//               className="red-button"
//               onClick={() => {
//                 markAttendance(u.username, 'Absent');
                
//                 setCurrentIndex(currentIndex + 1);
//               }}
//               disabled={!submitted}
//             >
//               Absent
//             </button>
           
//           </div>
//         ))}
//       </Carousel>
//       <button className="undo-button" onClick={handleUndo} disabled={!submitted}>
//         Undo
//       </button>
//     </Wrapper>
//   );
// }


// export default StudentSlider;
// //import './Slider.css'; // Define your custom CSS styles here
//import React, { useState } from 'react';

// function StudentSlider({ studentUsers, markAttendance }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < studentUsers.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const currentUser = studentUsers[currentIndex];

//   return (
//     <div>
//       <h3>Student Slider</h3>
//       <div className="slider-container">
//         <button onClick={handlePrev}>&lt; Previous</button>
//         <div className="student-profile">
//           <img src={currentUser.photoUrl} alt={currentUser.username} />
//           <p>{currentUser.username}</p>
//           <button onClick={() => markAttendance(currentUser.username, 'Present')}>Present</button>
//           <button onClick={() => markAttendance(currentUser.username, 'Absent')}>Absent</button>
//         </div>
//         <button onClick={handleNext}>Next &gt;</button>
//       </div>
//     </div>
//   );
// }