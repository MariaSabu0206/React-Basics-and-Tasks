import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const DataGettingBasics1 = () => {

    //basic way of form data getting..for projects we use spread operator as in line 27
    // const [name, setname] = useState("")
    // const [lastname, setlastname] = useState("")
    // const [mobileno, setmobileno] = useState("")

    // const getName=(a)=>{
    //     setname(a.target.value);
    //  }
    
     
    // const getLastName=(b)=>{
    //     setlastname(b.target.value);
    //  }

    //  const getMobileNo=(c)=>{
    //     setmobileno(c.target.value);
    //  }

    const [input, setinput] = useState ({name:"",lastname:"",mobile:""})
    const getInput=(a)=>{
        
        setinput({...input,[a.target.name]:a.target.value})
    }
   console.log(input);
   

    // const inputobj = { 
    //                     Name:name,
    //                     LastName:lastname,
    //                     Mobile:mobileno
    //                 }
    
    
    // const SubmitData=(e)=>{
    //     e.preventDefault(); //to prevent refreshing of console issue
    //     console.log(inputobj);
    // }
    return (
        <div>
            <Form className='w-50 m-auto' >
                <h2 className='text-center mt-4'>Contact Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={getInput}
                    name="name"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Last Name" 
                    onChange={getInput} 
                    name="lastname"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter your Mobile Number" 
                    onChange={getInput} 
                    name="mobile"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default DataGettingBasics1

