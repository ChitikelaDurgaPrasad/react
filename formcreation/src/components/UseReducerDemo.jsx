import React, { useReducer, useState } from 'react'

function reducer(state, action){
  if(action.type === 'CERTIFICATE-CONTAINER-INC'){
    let idValue = Math.max(...state.certificates.map(item => item.id))+1;
    return {...state, certificates:[...state.certificates,{id:idValue,certificate_value:"", certificate_error:""}]}
  }
  else if(action.type === 'CERTIFICATE-CONTAINER-REM'){
    return {...state, certificates:[...state.certificates.filter(item => item.id !== action.RemovelId)]};
  }
  else if(action.type === 'update_values'){
    return {
      ...state, [action.name]:{...state[action.name],[action.name]:action.value}
    }
  }
  else if(action.type === 'update_values_dynamic'){
    return{
      ...state, certificates:[...state.certificates.map(item => item.id === action.id ? 
        {...item,certificate_value:action.value}: item)]
    }
  }
  else if(action.type === 'validate'){
    action.event.preventDefault();
    let submission = true;
    let newState = {...state};
    if(state.fullName.fullName.trim() === ""){
      submission = false;
      newState.fullName = {...state.fullName,error:"Provide Valid input"}
    }
    else{
      newState.fullName = {...state.fullName,error:""}
    }
    if(state.email.email.trim() === ""){
      submission = false;
      newState.email = {...state.email,error:"Provide Valid input"}
    }
    else{
      newState.email = {...state.email,error:""}
    }
    newState.certificates = state.certificates.map(item => {
      if(item.certificate_value.trim() === ""){
        return {...item, certificate_error:"Please Provide proper input"}
      }
      else{
        return {...item, certificate_error:""}
      }
    })
    if(submission){
      action.event.target.submit();
    }
    else{
      return newState;
    }
  }
  return state;
}
const styleComponent = {
  maxWidth:"230px",
  width:"100%"
}
const UseReducerDemo = () => {
  const[temp, setTemp] = useState("");
    const[state, dispatch] = useReducer(reducer,{
      certificates:[{id:1,certificate_value:"",certificate_error:""}],
      fullName:{fullName:"", error:""},
      email:{email:"",error:""},
      password:{password:"",error:""},
      confirmPassword:{confirmPassword:"",error:""}
    });
    const handelChangeOfStatic = (e) =>{
      dispatch({
        type:"update_values",
        name: e.target.name,
        value:e.target.value,
      })
    }
    const handelChangeOfDynamic = (id,e) =>{

      dispatch({
        type:"update_values_dynamic",
        id:id,
        value:e.target.value,
      })
    }
  return (
    <form action="" onSubmit={(e)=>{
      dispatch({ type: "validate", event: e });
    }}>
      <div className='d-flex flex-column min-vh-100 align-items-center justify-content-center'>
        <div>
          <label htmlFor="name" className='form-label'>Full Name</label>
          <input type="text" className='form-control' name='fullName' style={styleComponent} id='name' onChange={handelChangeOfStatic}/>
          {state.fullName.error && <p>{state.fullName.error}</p>}
        </div>
        <div>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type="email" className='form-control' name='email' style={styleComponent} id='email' onChange={handelChangeOfStatic}/>
          {state.email.error && <p>{state.email.error}</p>}
        </div>
        <div>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" className='form-control' name='password' style={styleComponent} id='password' onChange={handelChangeOfStatic}/>
        </div>
        <div>
          <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
          <input type="password" className='form-control' name='ConfirmPassword' style={styleComponent} id='confirmPassword' onChange={handelChangeOfStatic}/>
        </div>
        {
          state.certificates.map((item ,index)=>
            <div key={item.id}>
              <label htmlFor={`certificate-${item.id}`} className='form-label'>carificate {item.id}</label>
              <input type="text" className='form-control mb-2' style={styleComponent} id={`certificate-${item.id}`} name={`certificate-${item.id}`} onChange={(e)=>handelChangeOfDynamic(item.id,e)}/>
              {item.certificate_error && <p>{item.certificate_error}</p>}
              {
                state.certificates.length-1 === index ? 
                  <button onClick={()=>
                    dispatch({
                      type:'CERTIFICATE-CONTAINER-INC',
                      name:`certificate-${item.id}`,
                    })} 
                  className='mb-3 rounded-3' 
                  type='button'>Add Button</button> : 
                  <button onClick={()=>
                      dispatch({
                        type:'CERTIFICATE-CONTAINER-REM',
                        RemovelId: item.id,
                      })
                    } 
                  className='mb-3 rounded-3'
                  type='button'>Remove Button</button>
                }
            </div>
          )
        }
        <div>
          <button type='submit'
          className='border rounded-3 mx-2 my-1' 
          style={styleComponent}>submit</button>
        </div>
      </div>
    </form>
  )
}

export default UseReducerDemo