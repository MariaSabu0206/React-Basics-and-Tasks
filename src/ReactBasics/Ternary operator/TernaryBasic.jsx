import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
import Task1 from '../mapping/Task1'

function TernaryBasic() {
   
    const [page, setpage] = useState(false)
   const ChangePage=()=>{
        {page===true? setpage(false) : setpage(true)}
   }
  return (
    <div>
        {page===true ? <Task1/> :""}
        <br />
        {/* <button onClick={ChangePage} style={{backgroundColor:page===true? "red" :"green"}}>{page===false?"ShowPage":"HidePage"}</button> */}
        <button onClick={ChangePage} className={page===true?"btn btn-danger":"btn btn-success"}>{page===false?"ShowPage":"HidePage"}</button>

    </div>
  ) 
}

export default TernaryBasic

