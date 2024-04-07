import React from 'react'
import { StoreFunction } from "../Context/store";
const ThreadsBlog = () => {

   const {userName} = StoreFunction();
    console.log(userName)
  return (
    <>
    
    See all blogs here
    
    </>
  )
}

export default ThreadsBlog
