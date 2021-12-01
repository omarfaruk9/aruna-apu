import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import img from '../../../images/img-1.jpg'
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <Container className="banner my-5">
            <div className="row row-cols-lg-2">
                <div className="intro d-flex align-items-center">
                    <div>
                        <h3>Hi! My name is</h3>
                        <h1>Arunimaa Aarushi Das.</h1>

                        <div className="fs-2 fw-bold text-success d-flex">
                            <span className="px-2 text-dark">I am a </span>

                            <Typewriter
                                options={{
                                    strings: ['Junior Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p>I am a Junior Developer mostly work with Front-End Development with HTML , CSS , JavaScript and React. I can make dynamic and responsive website too.</p>
                    </div>
                </div>
                <div className="intro-img">
                    <div>
                        <img src={img} className="img-fluid w-75" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;