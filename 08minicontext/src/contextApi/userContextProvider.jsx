import { useState } from 'react'
import UserContextAPI from './UserContextAPI'

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    return (
        <UserContextAPI.Provider value={{user, setUser}}>
            {children}
        </UserContextAPI.Provider>
    )
}

export default UserContextProvider