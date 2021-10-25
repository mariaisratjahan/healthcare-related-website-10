import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const{id,name,image,details}=service;
    // console.log(name,image,details);

    return (
        <div>
              <Col>
                <Card className="card-container">
                    <Card.Img variant="top" height="200" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Link to={`/details/${id}`}>
                    <Button variant="outline-danger" size="lg" className="fw-bold">Join {name}</Button>
                    </Link>
                    </Card.Body>
                </Card>
               </Col>
        </div>
    );
};

export default Service;