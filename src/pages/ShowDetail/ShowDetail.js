import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';



const ShowDetail = () => {
    const params=useParams();
    // console.log(params);
    const {serviceId}=params;
    // console.log(serviceId);
    const [userDetails,setUserDetails]=useState([]);
    const [singleUserDetails,setSingleUserDetails]=useState([]);

    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data=>setUserDetails(data))
    },[])
   
    useEffect(()=>{
        const result=userDetails.find(result => result.id === parseInt(serviceId))
        setSingleUserDetails(result)

    },[userDetails])

    return (
        <div>
        <Card className="m-5 p-5" >
            <Card.Img width="600" variant="top" src={singleUserDetails?.image} />
            <Card.Body>
                <Card.Title>{singleUserDetails?.name}</Card.Title>
                <Card.Text>
                {singleUserDetails?.details}
                </Card.Text>
                <button className="btn btn-warning">JOIN NOW</button>
            </Card.Body>
        </Card>
    
        </div>
    );
};

export default ShowDetail;