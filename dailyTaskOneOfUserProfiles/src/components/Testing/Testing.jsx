import React, { useCallback, useState } from 'react'

export const Testing = () => {
    const[num,setNum]= useState(0);
    const dp = useCallback(()=>{
        if(num === 0){
            console.log(`Zero ${num}`);
        }
        else{
            console.log(`Not Zero ${num}`);
        }
    },[])
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>{num}</div>
        <button type="button" onClick={()=>{console.log("hello");dp();setNum(prev=>prev+1)}}>Btn</button>
    </div>
  )
}
