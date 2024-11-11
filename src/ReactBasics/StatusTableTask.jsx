import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function StatusTableTask() {
    const toolsArray=[
                      {name:"TABLET",model:"HP-X2-210-G2",value:"N/A",days:5,status:"Inactive"},
                      {name:"BALLPEN",model:"BP-PANDA-PEN-10",value:"N/A",days:5,status:"Active"},
                      {name:"SOMETHING",model:"ANY-SOMETHING-12345",value:"N/A",days:8,status:"Inactive"},
                      {name:"MOUSE",model:"LOGITECH-SM-PC-2020",value:"N/A",days:13,status:"Active"},
                      {name:"TOOLS SAMPLE",model:"TOOLS-123-127",value:"N/A",days:5,status:"Pending"}
    ]
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tools Name</th>
          <th>Model No</th>
          <th>Value</th>
          <th>Number of Days</th>
          <th>Status</th>
        </tr>
      </thead>
      {toolsArray.map((data)=>{
        return(
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.model}</td>
          <td>{data.value}</td>
          <td>{data.days}</td>
          {data.status==="Inactive"?<td><Button variant="danger" >Inactive</Button></td>:data.status==="Active"?<td><Button variant="success" >Active</Button></td>:<td><Button variant="primary" >Pending</Button></td>}
        </tr>
        </tbody>
        )
    })}
        
     
    </Table>
    </div>
  )
}

export default StatusTableTask