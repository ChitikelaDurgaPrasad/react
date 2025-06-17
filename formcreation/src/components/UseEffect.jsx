import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count,setCount]= useState(0);

  useEffect(()=>{
    const fetchDup = () =>{
       new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const mockData = {
            userId: 1,
            name: "John Doe",
            email: "john@example.com"
          };
          resolve(mockData);
        },4000)
      }).then(res => console.log(res));
      console.log("inside function");
    }

      // const fetchDup =async() =>{
      //   console.log("inside function first")
      //   const res = await new Promise(resolve =>{
      //     setTimeout(()=>{
      //       resolve({
      //           userId: 1,
      //           name: "John Doe",
      //           email: "john@example.com"
      //         })
      //     },4000)
      //   });
      //   console.log("inside function second")
      //   return res;
      // }
      // console.log("upon fetchDup");
      // fetchDup().then(data => console.log(data));
      // console.log("Below fetchDup");
      fetchDup();
      console.log("inside");
  },[])
  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>increment</button> */}
    </div>
  )
}

export default UseEffect