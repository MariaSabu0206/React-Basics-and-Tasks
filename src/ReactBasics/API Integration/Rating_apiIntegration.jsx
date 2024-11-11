import { Rating } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rating_apiIntegration = () => {

    const [list, setlist] = useState([])
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((dummy)=>setlist(dummy.data)
      )
    }, [])
   
    
  return (
    <div className='row'>

     {list.map((item)=>{
        return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} style={{height:"360px",padding:"50px"}} />
      <Card.Body>
        <Card.Title className='text-center'>{item.title}</Card.Title>
        <Card.Text className='text-center' >
          Price : {item.price}
        </Card.Text>
        <Stack spacing={1} >
        <Rating name="size-medium" defaultValue={item.rating.rate} className={item.rating.rate > 4 ? "text-success" : ""} />
    </Stack>
        <Button variant="primary" className='mt-3' >Buy Now</Button>
        
      </Card.Body>
    </Card>
      )
    })}
    </div>
  )
}

export default Rating_apiIntegration