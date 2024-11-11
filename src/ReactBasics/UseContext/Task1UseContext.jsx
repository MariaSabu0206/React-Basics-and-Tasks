import React, { useContext } from 'react'
import { context1 } from './Task1Main'
import { Button} from 'react-bootstrap'

function Task1UseContext() {
    const sample = useContext(context1)
    const changeName = () => {
        sample.setname("My name is Maria Sabu")
    }
    return (
        <div>
            <h1>{sample.name}</h1>
            <Button onClick={changeName}>Click Me</Button>
            
                    </div>
                  )
                }
export default Task1UseContext