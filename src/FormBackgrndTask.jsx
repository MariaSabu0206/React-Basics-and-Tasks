import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Switch from '@mui/material/Switch';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { sampleContext } from './ReactBasics/UseContext/UseContest_basics';
function FormBackgrndTask() {
  const example=useContext(sampleContext)
  console.log(example);
  
    const [background, setbackground] = useState(true)
    const ChangeColor=()=>{
        {background===true?setbackground(false):setbackground(true)} 
    }
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (
    <div style={{backgroundColor:background===true?"black":"white",height:"100vh"}} >
        <div style={{width:"45%",margin:"auto",padding:"80px",border:background===true?"5px solid white":"5px solid black",justifyContent:"center"}}>
        <div className='d-flex justify-content-center' >
        <h1 style={{color:background===true?"white":"black"}}>Form</h1>
        <br />
        
        {/* usecontext
        <h1>Name is {example.value}</h1>
        <h1>Name is {example.string}</h1> */}

        <Switch onClick={ChangeColor} {...label} defaultChecked />
        {background===true?<FaMoon style={{color:background===true?"white":"black"}}/>:<IoSunny style={{color:background===true?"white":"black"}}/>}
        </div>
        <Form style={{width:"50%",margin:"auto",backgroundColor:background===true?"black":"white",color:background===true?"white":"black"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control className={background===true?"form_controletrue":"form_controlefalse"} style={{backgroundColor:background===true?"black":"white"}} type="text" placeholder="Enter First Name " />
        <Form.Text className="text-muted">{}
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Second Name</Form.Label>
        <Form.Control className={background===true?"form_controletrue":"form_controlefalse"}   style={{backgroundColor:background===true?"black":"white"}} type="text" placeholder="Enter Second Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className={background===true?"form_controletrue":"form_controlefalse"}  style={{backgroundColor:background===true?"black":"white"}} type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className={background===true?"form_controletrue":"form_controlefalse"}  style={{backgroundColor:background===true?"black":"white"}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default FormBackgrndTask



