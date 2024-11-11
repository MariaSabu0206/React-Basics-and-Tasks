import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Task1props({objarray}) {
    console.log(objarray);
    
  return (
    <div>
         {objarray.map((array)=>{
        return(
<Card style={{ width: '18rem' }}>

<Card.Img variant="top" src={array.image} />

<Card.Body>
    <Card.Title>{array.name}</Card.Title>
    <Card.Text>
        {array.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
</Card.Body>

</Card>
        )
    })}
    </div>
  )
}

export default Task1props



