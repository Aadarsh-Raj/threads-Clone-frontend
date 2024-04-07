import React, { useEffect } from "react";
import { StoreFunction } from "../Context/store";
import { useParams } from "react-router-dom";
import ProfileComp from "./ProfileComp";
const UserProfile = () => {
  const { userToken, apiUrl, setUserProfile, userProfile } =
    StoreFunction();
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      getUserProfile();
    } else {
      getMyProfile();
    }
  }, []);

  const getMyProfile = async () => {
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

  const getUserProfile = async () => {
    const userProfileApi = apiUrl + `user/search/${userName}`;
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProfileComp userProfile={userProfile} />
    </>
  );
};

export default UserProfile;
