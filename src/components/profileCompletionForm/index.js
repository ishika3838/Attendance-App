import React, { useState } from 'react';
import { services } from '../../services';
//import StudentProfile from '../studentProfile';
//import profile_icon from "../assets/image-gallery.png";
const ProfileCompletionForm = ({  onUpdate }) => {
 const[userId,setuserId]=useState("");
  const[contact,setContact]=useState("");
  const[section,setSection]=useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [rollno, setRollno] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    services.user.update({contact,userId,rollno,section,photoUrl})
      .then(res => {
        console.log(res.data);
        onUpdate(res.data); // Update the data in the parent component
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <>    <form onSubmit={handleSubmit}>
      <h3>Complete Your Profile</h3>
      <label>
        UserID:
        <input type="text" name='contact' value={userId}
          onChange={(e)=>setuserId(e.target.value)} />
      </label>
      <label>
        Contact:
        <input type="text" name='contact' value={contact}
          onChange={(e)=>setContact(e.target.value)} />
      </label>
      <div>
              <div className="input">
                {/* <img src={rollnum} alt="user_icon" /> */}
                <input
                  type="text"
                  placeholder="Roll Number"
                  value={rollno}
                  onChange={(e) => setRollno(e.target.value)}
                />
              </div>
</div>
      <div className="input">
               

                
                <select
                  value={section}
                  name='section'
                  onChange={(e)=>setSection(e.target.value)}
                >
                  <option value="" selected disabled>
                    --Select Section--
                  </option>
                  <option value="CS-I-A">
                    CS-I-A
                  </option>
                  <option value="CS-II-A">
                    CS-II-A
                  </option><option value="CS-III-A">
                    CS-III-A
                  </option><option value="CS-IV-A">
                    CS-IV-A
                  </option>
                  <option value="IT-I-A">
                    IT-I-A
                  </option>
                  <option value="ME-I-A">
                    ME-I-A
                  </option>
                  <option value="ME-II-A">
                    ME-II-A
                  </option>
                  <option value="ME-III-A">
                    ME-III-A
                  </option>
                  <option value="ME-IV-A">
                    ME-IV-A
                  </option>
                  <option value="EC-I-A">
                    EC-I-A
                  </option>
                  <option value="EC-II-A">
                    EC-II-A
                  </option>
                  <option value="EC-III-A">
                    EC-III-A
                  </option>
                  <option value="EC-IV-A">
                    EC-IV-A
                  </option>
                 
                </select>

               
              </div>
              <p>Choose Profile Photo </p>
          <div className="input">
            {/* <img src={profile_icon} alt="user_icon" /> */}
            <input
              type="file"
              accept="image/*"
             
              onChange={(e) =>
                setPhotoUrl(URL.createObjectURL(e.target.files[0]))
              }
            />
            {/* </label> */}
          </div>
     
      <button type="submit">Update Profile</button>
    </form>
    
</>
  );
};

export default ProfileCompletionForm;

// import React, { useState } from 'react';

// const ProfileCompletionForm = ({ studentData, onSubmit }) => {
//   const [contact, setContact] = useState(studentData.contact || '');
//   const [year, setYear] = useState(studentData.year || '');
//   const [section, setSection] = useState(studentData.section || '');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedData = {
//       ...studentData,
//       contact,
//       year,
//       section,
      
//     };
//     onSubmit(updatedData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Contact:</label>
//         <input
//           type="text"
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Year:</label>
//         <input
//           type="text"
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//         />
//       </div>
      
        
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ProfileCompletionForm;