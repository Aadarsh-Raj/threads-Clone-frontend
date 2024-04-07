import React from 'react'
import { StoreFunction } from "../Context/store";
const ThreadsBlog = () => {

   const {userName} = StoreFunction();
    console.log(userName)
  return (
    <>
    
    Server Down for threads and posts
    
    </>
  )
}

export default ThreadsBlog
