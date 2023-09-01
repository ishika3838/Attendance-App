// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
// //import ProfileMenu from "./ProfileMenu"; // Create a ProfileMenu component (explained later)

// const ProfileIcon = ({ onLogout, onUpdateProfile, onOpenProfile }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="profile-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleMenu} />
//       {isMenuOpen && (
//         <ProfileMenu
//           onLogout={onLogout}
//           onUpdateProfile={onUpdateProfile}
//           onOpenProfile={onOpenProfile}
//           closeMenu={() => setIsMenuOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProfileIcon;
