import React from "react";
import SearchCard from "./SearchCard";
import "./Styles/followersfollowingcomp.css";
import { StoreFunction } from "../Context/store";
const FollowingFollowersComp = (props) => {
  const { followersData, setFollowersData,setShowFollowers } = StoreFunction();
console.log(props)

  function setListForFollow(x) {
   if(x=== "followers"){
    setFollowersData(props.userProfile.followers)
   }else if(x=== "followings"){
    setFollowersData(props.userProfile.following)
   }else{
    setFollowersData([]);
   }
  }
  function hideFollowerContainer(){
    setShowFollowers(false)
  }
  return (
    <>
      <div className="followers-following-container">
        <div className="followers-following-card">
          <div className="followers-following-btns">
            <div
              className="followers-container"
              onClick={()=>setListForFollow("followers")}
            >
              Followers
            </div>
            <div
              className="following-container"
              onClick={()=>setListForFollow("followings")}
            >
              Followings
            </div>
          </div>
          <div className="followers-following-cards">
            <div className="close-card" onClick={hideFollowerContainer}>
                    Hide
            </div>
            {
                followersData.length ?  (<>
                {
                    followersData.map((ele)=>(
                      <SearchCard user={{userName:ele, followers:[]}} key={"follwingfollowers"+props.userProfile.userName}/>
                    ))
                }
                </>): "No User Found"
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowingFollowersComp;
