import React, { useEffect, useState } from "react";
import { services } from "../../services";
import { Wrapper } from "./style";
const StudentProfile = ({ user }) => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    //if it is user then on basis of their contact no. we can get their profile from api call
    if (user) {
      services.user
        .getProfile(JSON.parse(window.localStorage.getItem("USER")).contact)
        .then((res) => {
          setStudentData(res.data.user);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [user]);

  return (
    <Wrapper>
      {/* showing the user profile if their is student data present their by that contact number */}
      {studentData && (
        <div>
          <h3> Welcome to AttendEase {studentData.name} !</h3>
          <div className="card">
          <div className="card-photo">
          {studentData.photoUrl && (
            <div className="photo-frame">
            <img
            width="120"
            height="120"
            src={studentData.photoUrl}
            alt="Profile"
            />
            </div>
            )}
            </div>
            <div className="card-details">
            <div className="card-detail">
            <div>Name</div><div>{studentData.name}</div>
            </div>
            <div className="card-detail">
            <div>Section</div><div>{studentData.section}</div>
            </div>
            <div className="card-detail">
            <div>Roll number</div><div>{studentData.rollno}</div>
            </div>
            <div className="card-detail">
            <div>Branch</div><div>{studentData.branch}</div>
            </div>
            <div className="card-detail">
            <div>Email</div><div>{studentData.email}</div>
            </div>
            <div className="card-detail">
            <div>Phone</div><div>{studentData.contact}</div>
            </div>
            <div className="card-detail">
            <div>Address</div><div>{studentData.address}</div>
            </div>

            </div>

            </div>
        </div>
      )}
    </Wrapper>
  );
};

export default StudentProfile;
// import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import { Wrapper } from "./style";
// import userphoto from "../assets/user.png"
// const StudentProfile = ({ user }) => {
//   const [studentData, setStudentData] = useState(null);
//   const [photoUrl,setPhotoUrl] = useState("");
//   const defaultProfileImageUrl = "../assets/user.png";// Track profile update
//   useEffect(() => {
//     // Fetch the user's profile image URL and set it as the photoUrl state
//     if (user && user.photoUrl) {
//       setPhotoUrl(user.photoUrl);
//     } else {
//       // If no user or photo URL is available, use the default image URL
//       setPhotoUrl(defaultProfileImageUrl);
//     }
//   }, [user]);
//   useEffect(() => {
//     // If it is a user, then on the basis of their contact number,
//     // we can get their profile from an API call
//     if (user) {
//       services.user
//         .getProfile(JSON.parse(window.localStorage.getItem("USER")).contact)
//         .then((res) => {
//           setStudentData(res.data.user);
//         })
//         .catch((error) => {
//           console.error("Error fetching student data:", error);
//         });
//     }
//   }, [user]);

//   return (
//     <Wrapper>
//       {/* Showing the user profile if there is student data present for that contact number */}
//        {studentData && (
//         <div>
//           <h3>Welcome to AttendEase {studentData.name} !</h3>
//           {photoUrl && (
//             <img
//               width="120"
//               height="120"
//               src={photoUrl || userphoto}
//               alt="Profile"
//             />
//           )}
         
//           <table>
//             <tbody>
//               <tr>
//                 <td>User Name:</td>
//                 <td>{studentData.name}</td>
//               </tr>
//               <tr>
//                 <td>Section:</td>
//                 <td>{studentData.section}</td>
//               </tr>
//               <tr>
//                 <td>Roll Number:</td>
//                 <td>{studentData.rollno}</td>
//               </tr>
//               {/* Add more profile details here */}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// export default StudentProfile;
