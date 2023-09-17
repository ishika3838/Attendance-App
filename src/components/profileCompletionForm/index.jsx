// import React, { useState } from "react";
// import { services } from "../../services";
// import Wrapper from "./style";
// import profile_icon from "../assets/image-gallery.png";
// import rollnum from "../assets/id.png";
// import contact_icon from "../assets/phone-call.png";
// // import sect from "../assets/section.png"

// const ProfileCompletionForm = ({ onUpdate }) => {
 
//   const [contact, setContact] = useState("");
  
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [rollno, setRollno] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //call the api to update the user profile
//     services.user
//       .update({ contact ,rollno,  photoUrl })
//       .then((res) => {
//         console.log(res.data);
//         onUpdate(res.data);
//       })
//       .catch((error) => {
//         console.error("Error updating profile:", error);
//       });
//   };

//   return (
//     <Wrapper className="inputs">
//       <form onSubmit={handleSubmit}>
        
//         <div className="input">
//           <img src={contact_icon} alt="user_icon" />
//           <input
//             type="text"
//             name="contact"
//             value={contact}
//             placeholder="Contact"
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </div>

//         <div className="input">
//           <img src={rollnum} alt="user_icon" />

//           <input
//             type="text"
//             placeholder="Roll Number"
//             value={rollno}
//             onChange={(e) => setRollno(e.target.value)}
//           />
//         </div>

       

//         <div className="input">
//           <img src={profile_icon} alt="userPhoto_icon" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               setPhotoUrl(URL.createObjectURL(e.target.files[0]))
//             }
//           />
//         </div>
//         <div className="button">
//           <button type="submit">Update Profile</button>
//         </div>
//       </form>
//     </Wrapper>
//   );
// };

// export default ProfileCompletionForm;
// import React, { useState } from "react";
// import { services } from "../../services";
// import Wrapper from "./style";
// import profile_icon from "../assets/image-gallery.png";
// import rollnum from "../assets/id.png";
// import contact_icon from "../assets/phone-call.png";

// const ProfileCompletionForm = ({ onUpdate,user }) => {
//   // Initialize contact and name with user data if available
   
//   const [contact, setContact] = useState(user.contact || "");
//   const [name, setName] = useState(user.name || "");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [rollno, setRollno] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call the API to update the user profile
//     services.user
//       .update({ contact, name, rollno, photoUrl })
//       .then((res) => {
//         console.log(res.data);
//         onUpdate(res.data);
//       })
//       .catch((error) => {
//         console.error("Error updating profile:", error);
//       });
//   };

//   return (
//     <Wrapper className="inputs">
//       <form onSubmit={handleSubmit}>
//         <div className="input">
//           <img src={contact_icon} alt="user_icon" />
//           <input
//             type="text"
//             name="contact"
//             value={contact}
//             placeholder="Contact"
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={contact_icon} alt="user_icon" />
//           <input
//             type="text"
//             name="name"
//             value={name}
//             placeholder="UserName"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="input">
//           <img src={rollnum} alt="user_icon" />
//           <input
//             type="text"
//             placeholder="Roll Number"
//             value={rollno}
//             onChange={(e) => setRollno(e.target.value)}
//           />
//         </div>

//         <div className="input">
//           <img src={profile_icon} alt="userPhoto_icon" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               setPhotoUrl(URL.createObjectURL(e.target.files[0]))
//             }
//           />
//         </div>
//         <div className="button">
//           <button type="submit">Update Profile</button>
//         </div>
//       </form>
//     </Wrapper>
//   );
// };

// export default ProfileCompletionForm;
import React, { useState} from "react";
import { services } from "../../services";
import Wrapper from "./style";
import profile_icon from "../assets/image-gallery.png";
import rollnum from "../assets/id.png";
import contact_icon from "../assets/phone-call.png";

const ProfileCompletionForm = ({ onUpdate, user, onBack }) => {
  const [contact, setContact] = useState(user.contact || "");
  const [name, setName] = useState(user.name || "");
  const [photoUrl, setPhotoUrl] = useState("");
  const [rollno, setRollno] = useState("");
  const [branch , setBranch] = useState("");
  const [email ,setEmail] = useState("");
  const [address , setAddress] = useState("");
  const [isUpdated, setIsUpdated] = useState(false); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    services.user
      .update({ contact, name, rollno, photoUrl ,branch,email,address})
      .then((res) => {
        console.log(res.data);
        onUpdate(res.data);
        setIsUpdated(true); // Set update flag to true
        // Show success message
        alert("Your profile is updated!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <Wrapper className="box">
      <div className="inputs">
      {isUpdated && ( // Display success message when profile is updated
        <div className="alert success">
          Your profile is updated! <button onClick={onBack}>Back</button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Rest of the form inputs */}
        <div className="input">
          <img src={contact_icon} alt="user_icon" />
          <input
            type="text"
            name="contact"
            value={contact}
            placeholder="Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
                <div className="input">
         <img src={profile_icon} alt="user_icon" />
        <input
            type="text"
            name="name"
            value={name}
            placeholder="UserName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={rollnum} alt="user_icon" />
          <input
            type="text"
            placeholder="Roll Number"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={rollnum} alt="user_icon" />
          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={rollnum} alt="user_icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={rollnum} alt="user_icon" />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={profile_icon} alt="userPhoto_icon" />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPhotoUrl(URL.createObjectURL(e.target.files[0]))
            }
          />
        </div>

        <div className="button">
          <button type="submit">Update Profile</button>
        </div>
      </form>
      </div>
    </Wrapper>
  );
};

export default ProfileCompletionForm;

