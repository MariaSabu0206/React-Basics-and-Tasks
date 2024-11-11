import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
 
//useNavigateHook is used to link to other components
//hooks cannot be called directly inside function 
//so initially store useNavigate hook to a variable 
//then use that variable inside function to call path to link

function Login() {

    const navigate=useNavigate()

    const NavigateToRegister=()=>{
        navigate("/register")
    }
  return (
    <div>
        <h1>Login</h1>
        <Button onClick={NavigateToRegister}>Register</Button>
    </div>
  )
}

export default Login