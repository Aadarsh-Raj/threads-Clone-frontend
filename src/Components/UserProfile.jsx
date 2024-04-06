import React, { useEffect } from "react";
import { StoreFunction } from "../Context/store";
import ProfileComp from "./ProfileComp";
const UserProfile = () => {
  const { userToken, setUserToken, apiUrl, setUserProfile, userProfile } =
    StoreFunction();

  useEffect(() => {
    getUserProfile();
  });
  const getUserProfile = async () => {
    const userProfileApi = apiUrl + "user/myProfile";
    try {
      const response = await fetch(userProfileApi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });

      const data = await response.json();
      setUserProfile(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userProfile)
  return (
    <>
      <ProfileComp userProfile={userProfile} />
    </>
  );
};

export default UserProfile;
