import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/profilecomp.css"

const UserProfileComp = ({userProfile}) => {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="profile-container">
        <div className="profile-upper-section">
          {/* // name and photo */}
          <div className="profile-name-photo-container">
            <div className="profile-name-photo-container-left">
              <h2>{userProfile.fullName}</h2>
              <h4>{userProfile.userName}</h4>
            </div>
            <div className="profile-name-photo-container-right">
              <img src="" alt="User Pic" />
            </div>
          </div>
          <div className="profile-description-container">
            {
              userProfile.profileDescription ? userProfile.profileDescription : ""
            }
          </div>
          <div className="profile-followers-container">
            <div className="followers-btn">
                {userProfile.followers ? userProfile.followers.length : 0} followers
            </div>
            <div className="link-btn">
            {userProfile.otherLinks ? userProfile.otherLinks : ""}
            </div>
          </div>
        </div>
        <div className="profile-lower-section">
          xyz
        </div>
      </div>
    </>
  );
};

export default UserProfileComp;
