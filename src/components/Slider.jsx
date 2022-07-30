import React, { useState } from 'react'
import { AuthState } from '../context/context'
import './Slider.css'

const Slider = () => {
    //const [value,setValue]=useState(0)
    const {start,setstart}=AuthState();
    
     const handleChange=(e)=>{
        setstart(e.target.value)
        console.log(start)
     }


  return (
        <div>
          <label>
            <input 
              id="typeinp" 
              type="range" 
              min="0" max="50000" 
              value={start} 
              onChange={handleChange}
              step="1"/>
            {start}
          </label>
        </div>
      );
  
}

export default Slider