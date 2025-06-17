import React, { useContext } from 'react'
import UserContextAPI from '../contextApi/UserContextAPI'

const Profile = () => {
  const {user} =useContext(UserContextAPI)
  console.log(user)
  if(user === null){
    return <>Still noy yet logged</>
  }
  return (
    <div>Profile : {user.username}</div>
  )
}

export default Profile