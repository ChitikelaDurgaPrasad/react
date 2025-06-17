import React from 'react'
import { useState, useRef } from 'react'
import data from './Data'

const SearchFilter = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [debounce, setDebounce] = useState('')
    const filteredData = data.filter(user => user.first_name.toLowerCase().includes(debounce.toLowerCase()));
    const changeHandeler = (e) =>{
        const inputSearchValue = e.target.value;
        setInputValue(inputSearchValue)
        if(inputRef.current){
          clearTimeout(inputRef.current);
        }
        inputRef.current = setTimeout(()=>{setDebounce(inputSearchValue)},1000);
        // setTimeout(()=>{setDebounceValue(inputValue)},1000)
    }
  return (
    <div>
        <input 
        type="text" 
        name="" 
        id=""
        value={inputValue}
        style={{maxWidth:"1250px", width:"100%"}}
        onChange={changeHandeler}
        ref={inputRef}
        />
        <br />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default SearchFilter