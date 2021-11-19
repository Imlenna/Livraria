import React from 'react'
import { Card, Container } from 'react-bootstrap'

const card = (props) => {
    return (
        <>
            <Container className="mt-3">
                <Card border="dark">
                    <Card.Header className='bg-dark text-white'>{props.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.children}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default card
