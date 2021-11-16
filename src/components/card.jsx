import React from 'react'
import { Card } from 'react-bootstrap'

const card = (props) => {
    return (
        <>
          <Card border="dark">
                <Card.Header className='bg-dark text-white'>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.children}</Card.Title>
                </Card.Body>
            </Card>   
        </>
    )
}

export default card
