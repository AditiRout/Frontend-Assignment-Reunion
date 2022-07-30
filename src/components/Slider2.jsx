import React, { useState } from 'react'
import { AuthState } from '../context/context'
import './Slider.css'

const Slider = () => {
    //const [value,setValue]=useState(0)
    const {end,setend}=AuthState();
    
     const handleChange=(e)=>{
        setend(e.target.value)
        console.log(end)
     }


  return (
        <div>
          <label>
            <input 
              id="typeinp" 
              type="range" 
              min="0" max="50000" 
              value={end} 
              onChange={handleChange}
              step="1"/>
            {end}
          </label>
        </div>
      );
  
}

export default Slider