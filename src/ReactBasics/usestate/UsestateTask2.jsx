import React, { useState } from 'react'

function UsestateTask2() {
     let [colourName, setcolourName] = useState("Red")
     const Orange=()=>{
        setcolourName("Orange")
     }
     const Green=()=>{
        setcolourName("Green")
        
     }
     const Yellow=()=>{
        setcolourName("Yellow")
     }
     const Blue=()=>{
        setcolourName("Blue")
     }
     const Black=()=>{
        setcolourName("Black")
     }
  return (
    <div>
       <h1 style={{color:colourName}}>The colour is {colourName}</h1>
       <button className='orange' onClick={Orange}>Orange</button>
       <button className='green' onClick={Green}>Green</button>
       <button className='yellow' onClick={Yellow}>Yellow</button>
       <button className='blue' onClick={Blue}>Blue</button>
       <button className='black' onClick={Black}>Black</button>
    </div>
  )
}

export default UsestateTask2