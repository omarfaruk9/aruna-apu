import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MySkills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;