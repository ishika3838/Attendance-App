import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faEdit, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileMenu = ({ onLogout, onUpdateProfile, onOpenProfile, closeMenu }) => {
  return (
    <div className="profile-menu">
      <div className="menu-item" onClick={() => onOpenProfile()}>
        <FontAwesomeIcon icon={faUser} />
        My Profile
      </div>
      <div className="menu-item" onClick={() => onUpdateProfile()}>
        <FontAwesomeIcon icon={faEdit} />
        Update Profile
      </div>
      <div className="menu-item" onClick={() => onLogout()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logout
      </div>
    </div>
  );
};

export default ProfileMenu;
