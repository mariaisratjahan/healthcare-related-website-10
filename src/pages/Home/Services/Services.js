import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className="pt-4 m-5">
            <h2 className="mb-3 pb-5  services-heading">Our <span className="text-warning">Services</span></h2>
            <div >
            <Row xs={1} md={3} className="g-5">
           
              {
                  services.map(service =><Service
                   key={service.id}
                   service={service}
                  ></Service>)
              }
  
            </Row>
            </div>
        </div>
    );
};

export default Services;