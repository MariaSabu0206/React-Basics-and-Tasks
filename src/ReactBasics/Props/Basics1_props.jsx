import React, { useState } from 'react'
import Propschild from './Propschild'
import Task3 from '../mapping/Task3'
import Childprops from './Childprops'

function Basics1_props() {
    const [test, settest] = useState("Sample Test")
    const [number, setnumber] = useState(10)
    const [name,setname] = useState("Maria")

    const obj1={name:"Maria" ,age:23, edu:"BTech" }
    
    const changeName=()=>{
        setname("My name is Maria")
    }
  return (
    <div>
        {/* <h1><Propschild test={test} num={number} name={name}/> </h1> */}
        {/* <Task3 name={name}/> */}
        <Childprops btnfn={changeName} name={name} number={number} objname={obj1}/>
    </div>
  )
}

export default Basics1_props