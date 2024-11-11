import React from 'react'
import { CardTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPropsTask = ({ cardTitle, paragraph, buttonname }) => {
    return (
            <>
            <div>
                <Card style={{ width: '18rem' }}>

                    <Card.Img variant="top" src={"./ReactBasics/mapping/mapassets/Apple.jpeg"} />

                    <Card.Body>
                        <Card.Title>{cardTitle}</Card.Title>
                        <Card.Text>
                            {paragraph}
                        </Card.Text>
                        <Button variant="primary">{buttonname}</Button>
                    </Card.Body>

                </Card>
            </div>
            
            </>
    )
}

export default CardPropsTask