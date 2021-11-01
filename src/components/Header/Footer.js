import React from 'react';
import { Card, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="text-center by-5">
            <Navbar.Toggle />
            <Card.Header className='bg-info'>Food delivery</Card.Header>
            <Card.Body>
                <Card.Title className='text-success'>Online order system</Card.Title>
                <Card.Text>
                    we are given healthy food here and this food is delivered on time
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted bg-info'> Rangpur .lalmonirhat</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;