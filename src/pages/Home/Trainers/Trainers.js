import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../images/trainers/one.jpg';
import two from '../../../images/trainers/two.png';
import three from '../../../images/trainers/three.jpg';
import four from '../../../images/trainers/four.jpg';
import './Trainers.css';

const Trainers = () => {
    return (
        <div id="trainers" className="trainers">
         <h2 className="mb-3 pb-2 trainers-heading">Our <span className="text-warning">Trainers</span></h2>
            <div className="d-md-flex trainers-image">
                <img className=" img-fluid " src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>
        </div>
    );
};

export default Trainers;