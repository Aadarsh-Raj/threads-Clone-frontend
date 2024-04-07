import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/profilecomp.css";
import { StoreFunction } from "../Context/store";
import FollowBtn from "./FollowBtn";
import ProfileUpdate from "./ProfileUpdate";

const UserProfileComp = ({ userProfile }) => {
  const navigate = useNavigate();
  console.log(userProfile);
  const { userName,showUpdateProfile, setShowUpdateProfile} = StoreFunction();
  console.log(userName)
function showProfileUpdate (){
  setShowUpdateProfile(true);
}
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
            {userProfile.profileDescription
              ? userProfile.profileDescription
              : ""}
          </div>
          <div className="profile-followers-container">
            <div className="followers-btn">
              {userProfile.followers ? userProfile.followers.length : 0}{" "}
              followers
            </div>
            <div className="link-btn">
              <a href={userProfile.otherLinks ? userProfile.otherLinks : ""} target="_blank" rel="noopener noreferrer">{userProfile.otherLinks ? userProfile.otherLinks : ""}</a>
            </div>
          </div>

          {/* if it is my profile then edit or if it is others then follow */}
          {userProfile.userName === userName ? (
            <>
              <div className="edit-profile-container" onClick={showProfileUpdate}>Edit Profile</div>
              {
                showUpdateProfile ? <ProfileUpdate userName={userProfile.userName} fullName={userProfile.fullName} description={userProfile.description} otherLinks={userProfile.otherLinks} privateAccount={userProfile.privateAccount}/> : null
              }
            </>
          ) : (
            <>
              <FollowBtn userName={userProfile.userName} />
            </>
          )}
        </div>
        <div className="profile-lower-section">
          <div className="profile-posts-option-container">
            <div className="posts-option-item">Threads</div>
            <div className="posts-option-item">Replies</div>
            <div className="posts-option-item">Reposts</div>
          </div>
          <div className="profile-post-container">
            This is a container skdjfsakjfsaifsasfs
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileComp;
