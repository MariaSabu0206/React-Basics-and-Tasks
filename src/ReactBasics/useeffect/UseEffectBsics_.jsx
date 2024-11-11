import React, { useEffect, useState } from 'react'

function UseEffectBsics_() {
    const [name, setname] = useState("muhsina")
    const [number, setnumber] = useState(13)
    useEffect(() => {
     alert("The alert is worked !!!")
    }, [name,number])
    const ChangeName=()=>{
setname("maria")
    }

    const changeNumber=()=>{
        setnumber(15)
    }

  return (
    <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <button onClick={ChangeName}>Change name</button>
        <button onClick={changeNumber}>change number</button>
    </div>
  )
}

export default UseEffectBsics_


