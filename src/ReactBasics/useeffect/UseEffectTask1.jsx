import React, { useEffect, useState } from 'react'

function UseEffectTask1() {
    const [name, setname] = useState("Maria")
    useEffect(() => {
      alert(`The name is ${name}`)
    }, [name])
    const ChangeName=()=>{
        setname("Elizabeth")
            }
    
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={ChangeName}>Change name</button>
    </div>
  )
}

export default UseEffectTask1