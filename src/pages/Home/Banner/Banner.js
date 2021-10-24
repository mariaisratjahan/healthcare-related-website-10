import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import image1 from '../../../images/Banner/image1.jpg';
import image2 from '../../../images/Banner/image2.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel fade className="carousel" >
                <Carousel.Item >               
                   <div className="item">
                   <img height="600"
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                   </div>
                    <Carousel.Caption className="carousel-caption">
                    <h2 className="yellow-color">RUNNER'S LIFE</h2>                    
                    <h4 className="white-color">THE BEST</h4>
                     <h1 className="sky-color">FITNESS STUDIO</h1>
                     <h4 className="white-color">IN TOWN</h4>                   
                    <Button className="my-5 py-3 px-5 fw-bold fs-5" variant="outline-warning">Join Us Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item">
                    <img height="600"
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />
                    </div>

                    <Carousel.Caption className="carousel-caption">
                    <h2 className="yellow-color">RUNNER'S LIFE</h2>
                    <h4 className="white-color">THE BEST</h4>
                     <h1 className="sky-color">FITNESS STUDIO</h1>
                     <h4 className="white-color">IN TOWN</h4>
                    <Button className="my-5 py-3 px-5 fw-bold fs-5" variant="outline-warning">Join Us Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;