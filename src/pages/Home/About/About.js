import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import aboutImg from '../../../images/img-1.jpg';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center my-5">About me</h1>
            <div className="row row-cols-lg-2">
                <div className="about-img">
                    <img src={aboutImg} alt="" className="img-fluid about-img w-75 img-thumbnail" />
                </div>
                <div className="about-me d-flex align-items-center">
                    <div className="about-info">
                        <h3 className="text-success">Who I am</h3>
                        {/* <h2>I'm Arunimaa and, <br /> I'm a <span className="text-success">Junior Web Developer</span></h2> */}
                        <div className="fs-2 fw-bold text-success">
                            <div>
                                <span className="text-dark">I'am Arunima and,</span>
                            </div>
                            <Typewriter
                                options={{
                                    strings: [' Junior Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p>I'm a Junior Web Developer. I am 16 years old. I was born on 26 July,2005.I live at Bangladesh. I am yearning for experience and I love to work. I am confident enough to say I am dedicated towards my job.</p>
                        <button className="btn btn-success">Resume</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;