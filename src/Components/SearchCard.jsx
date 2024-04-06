import React from "react";
import "./Styles/searchcard.css"
import FollowBtn from "./FollowBtn";
import UnfollowBtn from './UnfollowBtn';
const SearchCard = (props) => {
    
  return (
    <>
      <div className="search-card">
        <div className="search-card-left">
          <div className="search-card-name">
            <div className="photo-container">
            <img src="" alt="photo" />
            </div>
            <div className="profile-name-container">
            <h4>{props.user.fullName}</h4>
            <p>{props.user.userName}</p>
            </div>
          </div>
          <div className="search-card-followers">{props.user.followers.length} followers</div>
        </div>
        <div className="search-card-right">
            {
                props.user.following ? (<UnfollowBtn userName={props.user.userName} />) :(<FollowBtn userName={props.user.userName} />)
            }
            </div>
      </div>
    </>
  );
};

export default SearchCard;
