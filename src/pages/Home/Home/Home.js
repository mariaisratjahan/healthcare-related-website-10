import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Trainers from '../Trainers/Trainers';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Trainers></Trainers>
            
           
        </div>
    );
};

export default Home;