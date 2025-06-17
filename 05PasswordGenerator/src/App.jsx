import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword]= useState('');

  const generatePassword = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!@#$%^&*()_+"
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)
    console.log("inside useCallback "+ pass );
  },[length, numberAllowed, characterAllowed])

  useEffect(() => {
    console.log("inside useEffect");
    generatePassword()
  },[length, numberAllowed, characterAllowed])

  const copToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  
  const passwordRef = useRef(null)

  return (
    <>
      <div className="w-100 d-flex flex-column min-vh-100 d-flex justify-content-center align-items-center bg-secondary-subtle p-4">
        <h1 className="text-center py-2">Password Generator</h1>
        <div className="d-flex overflow-hidden rounded-3 w-100" style={{maxWidth:'600px'}}>
          <input 
          type="text" 
          value={password}
          className='w-100 border border-white px-3 outline-0'
          placeholder='Password'
          readOnly
          style={{ outline: 'none', boxShadow: 'none' }} 
          ref={passwordRef}
          />
          <button
          onClick={copToClipboard}
           className=" btn btn-primary outline-0 px-4" style={{borderRadius:'0px'}}>Copy</button>
        </div>
        <div className="d-flex p-3">
          <div className="d-flex px-2 py-1 gap-2">
            <input 
            type="range" 
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name="" 
            id="" 
            style={{cursor: 'pointer'}}
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className="d-flex px-2 py-1">
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className='me-1'
            name="" 
            id="" />
            <label htmlFor="Number">Numbers</label>
          </div>
          <div className="d-flex px-2 py-1">
            <input 
            type="checkbox" 
            defaultChecked = {characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
            className='me-1'
            name="" 
            id="" />
            <label htmlFor="CharacterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

