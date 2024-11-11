import { Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Stack, Table } from 'react-bootstrap'

const APIintegrationBasics1 = () => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => setproduct(response.data.products));


    }, [])

    
    return (
       

                <div>
                    <h1 className='text-center'>Product List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        {product.map((items) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.title}</td>
                                        <td>{items.category}</td>
                                        <td>{items.description}</td>
                                        <td><Stack spacing={1} >
        <Rating name="size-medium" defaultValue={items.rating}  />
    </Stack></td>
                                    </tr>
                                </tbody>
                            )
                        })}


                    </Table>
                </div>
            )
        }


export default APIintegrationBasics1