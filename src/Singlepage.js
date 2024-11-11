import React from 'react'
import Header from './SinglePageApplication/Header'
import Home from './SinglePageApplication/Home'
import Register from './SinglePageApplication/Register'
import Login from './SinglePageApplication/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Singlepage = () => {
  
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Singlepage