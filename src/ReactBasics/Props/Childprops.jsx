import React from 'react'
import { Button } from 'react-bootstrap'

function Childprops({btnfn,name,number,objname}) {
    
  return (
    <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <Button onClick={btnfn}>Change Text</Button>
        <h2>My name is {objname.name}. I am {objname.age} yrs old. I am a {objname.edu} graduate </h2>
    </div>
  )
}

export default Childprops