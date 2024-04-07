import React from "react";
import "./Styles/profileupdate.css";
import { StoreFunction } from "../Context/store";
import ProfileUpdateForm from "./ProfileUpdateForm";
const ProfileUpdate = (props) => {
  const { setShowUpdateProfile } = StoreFunction();
  function hideProfileUpdateCard() {
    setShowUpdateProfile(false);
  }
  return (
    <>
      <div className="profile-update-container">
        <div className="profile-update-card">
            <div className="userName-container profile-update-div">
            <div className="userName" title="UserName">
                {props.userName}
            </div>
            <div className="photo">
                <input type="file" title="Change Profile Pic" accept=".jpg, .jpeg, .png"/>
            </div>
            </div>
          <div className="name-container profile-update-div">
            <ProfileUpdateForm placeholder={props.fullName ? props.fullName : "Change Name"} type={"fullName"}/>{" "}
          </div>
          <div className="bio-container profile-update-div">
            <ProfileUpdateForm
              placeholder={props.description? props.description : "Add Bio..."}
              type={"description"}
            />
          </div>
          <div className="link-container profile-update-div">
            <ProfileUpdateForm
              placeholder={props.otherLinks.length ? props.otherLinks : "Add Links ..."}
              type={"otherLinks"}
            />
          </div>
          <div className="private-account-container">
            {props.privateAccount}
          </div>
          <div className="done-container" onClick={hideProfileUpdateCard}>
            Done
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
