import React, { useEffect } from "react";
import "./Styles/followbtn.css";
import { StoreFunction } from "../Context/store";

const FollowBtn = (props) => {
  const { userToken, apiUrl,
    setLoadSearchComp } = StoreFunction();

  async function followUser() {
    const userName = props.userName;
    const followUrl = apiUrl + `user/unfollow/${userName}`;
    try {
      const response = await fetch(followUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });
      const data = await response.json();
      setLoadSearchComp(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button className="follow-btn" onClick={followUser}>
        Unfollow
      </button>
    </>
  );
};

export default FollowBtn;
