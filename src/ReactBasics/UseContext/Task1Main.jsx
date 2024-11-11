import React, { createContext, useState } from 'react'
import Task1UseContext from './Task1UseContext';
import Task2UseContext from './Task2UseContext';
import Task3UseContext from './Task3UseContext';

const context1=createContext();
function Task1Main() {
    
    const [name, setname] = useState("Maria")
    const obj={name:"Maria",age:23,edu:"Btech"}
    const objarray=[
        {name:"Maria",age:23,edu:"Btech"},
        {name:"Muhsina",age:23,edu:"Btech"},
        {name:"Sarang",age:23,edu:"Btech"},
        {name:"Jasil",age:23,edu:"Btech"}
    ]

  return (
    <div>
        <context1.Provider value={{name,setname,obj,objarray}}>
           <Task1UseContext/>
           <Task2UseContext/>
           <Task3UseContext/>
           </context1.Provider>
       
    </div>
  )
}

export default Task1Main
export  {context1}