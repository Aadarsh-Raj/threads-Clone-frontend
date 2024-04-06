import React from 'react'
import "./Styles/followbtn.css"
import { StoreFunction } from "../Context/store";

const FollowBtn = (props) => {
    const { userToken, apiUrl,
        setLoadSearchComp } =
    StoreFunction();
    const followUser = async (e)=>{
        const userName = props.userName;
        const followUrl = apiUrl + `user/follow/${userName}`;
        try {
            const response = await fetch(followUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: userToken,
                }
              });
              const data = await response.json();
              console.log(data);
              setLoadSearchComp(false);
        } catch (error) {
            console.log(error);
        }

    }

  return (
   <>
   <button className="follow-btn" onClick={followUser}>
    Follow
   </button>
   
   
   </>
  )
}

export default FollowBtn
