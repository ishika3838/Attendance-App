import React, { useState } from "react";
import { services } from "../../services";
import Wrapper from "./style";
import profile_icon from "../assets/image-gallery.png";
import rollnum from "../assets/id.png";
import contact_icon from "../assets/phone-call.png";
// import sect from "../assets/section.png"

const ProfileCompletionForm = ({ onUpdate }) => {
 
  const [contact, setContact] = useState("");
  
  const [photoUrl, setPhotoUrl] = useState("");
  const [rollno, setRollno] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //call the api to update the user profile
    services.user
      .update({ contact, rollno,  photoUrl })
      .then((res) => {
        console.log(res.data);
        onUpdate(res.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <Wrapper className="inputs">
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <h3>Complete Your Profile</h3>
        </div>

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
          <img src={rollnum} alt="user_icon" />

          <input
            type="text"
            placeholder="Roll Number"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>

        {/* <div className="input">
          <img src={sect} alt="section_icon" />
          <select
            value={section}
            name="section"
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="" selected disabled>
              --Select Section--
            </option>
            <option value="CS-I-A">CS-I-A</option>
            <option value="CS-II-A">CS-II-A</option>
            <option value="CS-III-A">CS-III-A</option>
            <option value="CS-IV-A">CS-IV-A</option>
            <option value="IT-I-A">IT-I-A</option>
            <option value="ME-I-A">ME-I-A</option>
            <option value="ME-II-A">ME-II-A</option>
            <option value="ME-III-A">ME-III-A</option>
            <option value="ME-IV-A">ME-IV-A</option>
            <option value="EC-I-A">EC-I-A</option>
            <option value="EC-II-A">EC-II-A</option>
            <option value="EC-III-A">EC-III-A</option>
            <option value="EC-IV-A">EC-IV-A</option>
          </select>
        </div> */}

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
    </Wrapper>
  );
};

export default ProfileCompletionForm;
