import { useEffect, useState } from "react"
import { userDetails } from "../../api/apindex"

export const UserProfile = () => {
  const [userData, setUserData] = useState(null);
    useEffect(() => {
        userDetails().then(setUserData).catch(error => console.error('Login Error : ',error));
    },[])
    if(!userData){
      return <div>Loading....</div>
    }
    return (
      <div>
        <div>{userData.data.firstName} {userData.data.lastName}</div>
      </div>
    )
}
