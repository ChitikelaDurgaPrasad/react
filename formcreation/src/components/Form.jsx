import React, { useRef, useState } from 'react'
import { indiaStatesAndUTs } from './indianStates';
import { districtsByState } from './indianStateDistricts';

const Form = () => {
  const [labelContainer, setLabelContainer] = useState([{ id: 1 }]);
  const [gender, setGender] = useState("");
  const [stateselctor, setStateSelctor] = useState("");
  const [districtSelector, setDistrictSelector] = useState("");
  const handelAddBtn = () =>{
    const newValue = labelContainer[labelContainer.length-1].id+1;
    setLabelContainer(prev => [...prev,{id : newValue}])
  }
  const removeBtn = (keyIndex) =>{
    setLabelContainer(prev => prev.filter(item => item.id !== keyIndex))
  }

  // const removeBtn = (id) => {
  //   setLabelContainer(prev => prev.filter(item => item.id !== id));
  // };

  // const handleAddBtn = () => {
  //   const newId = Math.max(...labelContainer.map(item => item.id)) + 1;
  //   setLabelContainer(prev => [...prev, { id: newId }]);
  // };
  
  return (
    <div>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <div className='d-flex flex-column'>
          <label htmlFor="first_name" className="form-label">Full Name :</label>
          <input type="text" className="text" placeholder='First Name' name='first_name' id='first_name'/>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="genderIdentification" className='form-label'>Gender:</label>
          <select name="genderIdentification" id="genderIdentification" value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value=""  disabled>--select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="text" placeholder='Email' name='email' id='email'/>
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="text" placeholder='Password' name='password' id='password'/>
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="select-state" className="form-label">State</label>
          <select name="select-state" id="select-state" value={stateselctor} onChange={(e)=>setStateSelctor(e.target.value)}>
            <option value=""  disabled>--select--</option>
            {indiaStatesAndUTs.map((state, index) => 
              <option key={state.value} value={state.value}>
                  {state.label}
              </option>
            )}
          </select>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="district-select" className="form-label">District</label>
          <select name="district-select" id="district-select" value={districtSelector} onChange={(e) => setDistrictSelector(e.target.value)} disabled={!stateselctor}>
            <option value="" disabled>select</option>
            {districtsByState[stateselctor]?.map(district =>
              <option key={district.value} value={district.value}>{district.label}</option>
            )}
          </select>
        </div>
        {labelContainer.map((item, index) => 
          <div className="d-flex flex-column" key={item.id}>
            <label htmlFor={`certificate-${item.id}`} className='mb-2'>certificate : {index+1}</label>
            <input type="text" name={`certificate-${item.id}`} id={`certificate-${item.id}`}/>
            <br />
            {index === labelContainer.length-1 ? <button onClick={handelAddBtn}>Add Btn</button> :
            <button onClick={() => removeBtn(item.id)}>remove Btn</button>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Form