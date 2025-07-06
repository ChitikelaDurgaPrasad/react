import React, { useCallback, useState } from 'react'

export const Testing = () => {
    const [num, setNum] = useState(0);
    const promiseOne = new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("This is first Promise After resolved of One min")},1000)
    });
    const promiseTwo = new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("This is second Promise After resolved of Two min")},2000)
    });
    const promiseThree = "This is Third Promise";
    const promiseFour = new Promise((resolve, reject)=>{
        reject("This is Fourth Promise");
    });
    const result = Promise.all([promiseOne, promiseTwo,promiseThree, promiseFour]).then(res => console.log(res)).catch(error => console.error("Promise.all => ", error));

  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>{num}</div>
        <button type="button" onClick={()=>{setNum(prev=>prev+1)}}>Btn</button>
    </div>
  )
}
