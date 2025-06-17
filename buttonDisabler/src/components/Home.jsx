import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {

  const [deciderValue, setdeciderValue] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const submitBtn = async(e) =>{
    setisLoading(true)
    await new Promise((resolve)=>setTimeout(resolve,4000));
    setisLoading(false);
    if(deciderValue){
      navigate('/success')
    }else{
      navigate('/fail')
    }
  }
  // const deciderFunction = () =>{
  //     setdeciderValue(preVal => !preVal)
  // }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 position-relative">
      <div className='d-flex flex-column gap-3' style={{maxWidth:"400px",width:"80%",opacity: isLoading ? 0.3 : 1}}>
        <div className="d-flex flex-column">
          <label 
          htmlFor="userName"
          className='form-label justify-content-start d-flex'
          >
          Email
          </label>
          <input 
          type="text" 
          name="" 
          id="userName" 
          className='form-control'
          style={{maxWidth:"350px"}}
          />
        </div>
        <div>
          <label 
          htmlFor="password"
          className='form-label d-flex justify-content-start'
          >
          Password
          </label>
          <input 
          type="text" 
          name="" 
          id="password" 
          className='form-control'
          style={{maxWidth:"350px"}}
          />
        </div>
        <div className='d-flex gap-2'>
          <input 
          type="checkbox" 
          name="decider" 
          id="" 
          checked={deciderValue}
          onChange={()=>setdeciderValue(preVal => !preVal)}
          />
          <label htmlFor="">Decider</label>
        </div>
        <div className='d-flex justify-content-start'>
          <button 
          type='submit'
          className='border rounded px-3 py-2'
          onClick={submitBtn}
          disabled={isLoading}
          >{isLoading ? "Logging..." : "Login"}</button>
        </div>
      </div>
      {isLoading && (<div className='spinnerParent'><div className="loading">Loading...</div></div>)}
    </div>
  )
}

export default Home