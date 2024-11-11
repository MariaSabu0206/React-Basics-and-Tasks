import React, { useContext } from 'react'
import { context1 } from './Task1Main'

function Task2UseContext() {
  const task2  = useContext(context1)
  return (
    <div>
     <h3>I am {task2.obj.name}. I am {task2.obj.age} yrs old. I am a {task2.obj.edu} Graduate</h3>

    </div>
  )
}

export default Task2UseContext