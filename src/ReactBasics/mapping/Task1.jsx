import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./mapassets/Apple.jpeg"
import img2 from "./mapassets/mango.jpg"
import img3 from "./mapassets/Grapes.jpg"
import img4 from "./mapassets/Orange.jpg"
function Task1()
 {
    const fruitBasket = [
        { image: img1, name: "Apple", Price: 50 },
        { image: img2, name: "Mango", Price: 40 },
        { image: img3, name: "Grapes", Price: 60 },
        { image: img4, name: "Orange", Price: 35 }]
       
        
        
       
        return (
       
            fruitBasket.map((fruit) => {
            
               

   
    return (
       
        <div className='d-inline-flex m-2 p-4'>
            <Card style={{ width: '18rem', height:"60vh",border:"1px solid black" }} >
                <Card.Img variant="top" src={fruit.image} style={{height:"35vh"}} />
                <Card.Body>
                    <Card.Title>{fruit.name}</Card.Title>
                    <Card.Text>
                      Price : ₹ { fruit.Price}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
       
       
  )
  
  })
 

)}

export default Task1