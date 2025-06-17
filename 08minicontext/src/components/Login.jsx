import React, { useState,useContext } from 'react'
import UserContextAPI from '../contextApi/UserContextAPI'

const Login = () => {
    const[username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const {setUser} = useContext(UserContextAPI)
    const handelLogin = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
         type="text"
         name="" 
         id="" 
         placeholder='Username'
         /> 
         <br /> <br />
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        name="" 
        id="" 
        placeholder='Password'
        />
        <br /> <br />
        <button onClick={handelLogin} type="button">Submit</button>
        
    </div>
  )
}

export default Login