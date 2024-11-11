import React, { useState } from 'react'

function UsestateTask1() {
    
    let [number, setnumber] = useState(0)
    const Increment=()=>{
        number++
        setnumber(number)
    }
    const Decrement=()=>{ 
        if (number<= 0) {
            setnumber(0)
        } else {
            number--
        setnumber(number)
        }
    }

  return (
    <div>
          <h1>{number}</h1>
          <button onClick={Increment} >Increment</button>
          <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default UsestateTask1