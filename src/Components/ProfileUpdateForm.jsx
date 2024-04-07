import React from 'react'
import "./Styles/profileupdateform.css";
import { StoreFunction } from '../Context/store';
const ProfileUpdateForm = (props) => {
const {userToken, apiUrl} = StoreFunction();


const updateProfile = async (e)=>{
    e.preventDefault();
    const updateUrl = apiUrl + "userUpdation/profile";
    const updateProfileObject = {};
    if(props.type == "fullName"){
        updateProfileObject.fullName= e.target.children[0].value;
    }
    if(props.type == "description"){
        updateProfileObject.profileDescription= e.target.children[0].value;
    }
    if(props.type == "otherLinks"){
        updateProfileObject.otherLinks= e.target.children[0].value;
    }
    try {
        const response = await fetch(updateUrl,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: userToken,
              },
            body:JSON.stringify(updateProfileObject)
        })

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


  return (
    <>
    <form action="" className='profile-update-form' onSubmit={updateProfile}>
    <input type="text" placeholder={props.placeholder}/> <input type="submit" value={"✎"}/>
        </form>
    </>
  )
}

export default ProfileUpdateForm
