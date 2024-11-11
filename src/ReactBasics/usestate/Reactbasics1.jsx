import React, { useState } from 'react'
//Usestatehook
//same as declaring a variable 
//here we have two parameters eg here name and setname
//variable "name" stores "Maria" given in usestate
//"setname" is a function which allows future updation in variable "name"
function Reactbasics1() {
    const [name, setname] = useState("Maria")
    const [number, setnumber] = useState(20)
    const ChangeName=()=>{
        setname("Suhra")
    }
    const ChangeNumber=()=>{
        setnumber(40)
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <button onClick={ChangeName}>Change Name</button>
        <button onClick={ChangeNumber}>Change Number</button>
    </div>
  )
}

export default Reactbasics1