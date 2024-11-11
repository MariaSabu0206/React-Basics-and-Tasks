import React, { useContext } from 'react'
import { context1 } from './Task1Main'
import { Table } from 'react-bootstrap'

function Task3UseContext() {
    const task3  = useContext(context1)
  return (
    <div>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                {task3.objarray.map((data) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.edu}</td>
                            </tr>
                        </tbody>

                    )
                })}
                    </Table>
    </div>
  )
}

export default Task3UseContext