import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function Task() {

    let [array, newarray] = useState( [
        {name:"Apple",qty:10,colour:"red"},
        {name:"Orange",qty:17,colour:"orange"},
        {name:"Grapes",qty:15,colour:"purple"},
        {name:"PineApple",qty:1,colour:"Yellow"},
        {name:"Banana",qty:5,colour:"Yellow"}])
   
        let obj1={id:6,name:"Watermelon",qty:10,colour:"red"}
    let addObject=()=>{
        const added=[...array,obj1]
        newarray(added)
    }
    //spread operator can be used to combine two different arrays
     const array1=["jackfruit","strawberry","blueberry","cherry"]
     const array2=["Angitha","Anju","Grishya"]
     const totalarray=[...array1,...array2]
     console.log(totalarray);
     
     const newfruit="Banana"
     const totalfruitarray=[...array1,newfruit]
     console.log(totalfruitarray);
     
     return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Fruit</th>
          <th>Quantity</th>
          <th>Colour</th>
        </tr>
      </thead>
     { array.map((data,index)=>{

      return(<tbody>
        <tr key={index}>
          
          <td>{data.name}</td>
          <td>{data.qty}</td>
          <td>{data.colour}</td>
        </tr>
      </tbody>)
})}
    </Table>
    <div className='text-end me-4'>
    <Button onClick={addObject}>Add Items</Button>
    </div>
    </div>
  )
}

export default Task