import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

const GitHub = () => {
  console.log("in github")
  const data = useLoaderData()
  // const[data, setData] = useState(null)
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  //     await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate 4-second delay
  //     setData(await response.json()) ;
  //   }
  //   fetchData();
  //   console.log(data)
  // },[])
  return (
    <div className='text-center py-4 bg-orange-600'>
      GitHub: {data ? data.bio : 'Loading......'}
    </div>
  );
};

const githubInfoLoader = async () => {
  console.log("started")
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  console.log(response.status)
  await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate 4-second delay
  console.log(response.status)
  return  response.json();
};

export { GitHub, githubInfoLoader };
