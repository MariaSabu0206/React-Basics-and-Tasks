import React from 'react'
import Table from 'react-bootstrap/Table';
function Task2() { 

    const EmployeeArray=[
        {id:1,name:"Maria",position:"React Developer",sallary:60000},
        {id:2,name:"Muhsina",position:"React Developer",sallary:70000},
        {id:3,name:"Jasil",position:"React Developer",sallary:45000},
        {id:4,name:"Sarang",position:"React Developer",sallary:80000},
        {id:5,name:"Sheffiq",position:"React Developer",sallary:65000},
    ]
       
    
    return(
        
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Position</th>
          <th>Sallary</th>
        </tr>
      </thead>
     { EmployeeArray.map((data)=>{

      return(<tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.position}</td>
          <td>{data.sallary}</td>
        </tr>
      </tbody>)
})}
    </Table>
    </div>
  ) 
}

export default Task2