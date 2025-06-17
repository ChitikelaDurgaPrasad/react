import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [inputValue, setInputValue] = useState(null);
    const [debounceValue, setDebounceValue] = useState(null);
    const changeHandeler = (e) =>{
        setInputValue(e.target.value);
        clearTimeout();
        setTimeout(()=>{setDebounceValue(inputValue)},1000)
    }
  return (
    <div>
        <input 
        type="text" 
        name="" 
        id="" 
        onChange={changeHandeler}
        />
        <br />
        <div><strong>Default:</strong>{inputValue}</div>
        <div><strong>Debounce:</strong></div>
    </div>
  )
}

export default Home