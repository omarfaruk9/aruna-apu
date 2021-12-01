import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t4ezold', 'template_xi3u5gn', e.target, 'user_LYCZeT078nbnTcYpMiIfO')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        e.target.reset();
    };
    return (
        <Container className="my-5">
            <div className="text-center my-5">
                <h1>Contact me</h1>
                <hr className="w-25 mx-auto" />
                <h3>Get In Touch</h3>
            </div>
            <div className="row row-cols-lg-2">
                <div className="contact-me">
                    <h4>Get in Touch</h4>
                    <p>I am always ready for service. For any help or curiosity, feel free to contact me via my email or phone.</p>
                    <div className="d-flex align-items-center">
                        <div>
                            <i className="fas fa-user fs-3"></i>
                        </div>
                        <div className="px-3">
                            <h5>Name</h5>
                            <p>Arunimaa Aarushi Das</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker-alt fs-3"></i>
                        <div className="px-3">
                            <h5>Address</h5>
                            <p>Dhaka ,Bangladesh.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-envelope fs-3"></i>
                        <div className="px-3">
                            <h5>Email</h5>
                            <p>lagnodas235@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="send-msg">
                    <form onSubmit={sendEmail} className="">
                        <div className="row mt-5 mx-auto">
                            <div className="col-7  form-group mx-auto">
                                <input className="form-control shadow-lg my-2 bg-dark bg-dark" type="text" name="name" placeholder="Your name" />
                            </div>
                            <div className="col-7 form-group mx-auto">
                                <input className="form-control my-2 bg-dark" type="email" name="email" placeholder="Your gamil" />
                            </div>
                            <div className="col-7 form-group mx-auto">
                                <textarea className="form-control my-2 text-light bg-dark" cols="10" rows="6" name="message" placeholder="Your message" />
                            </div>
                            <div className="col-7 form-group mx-auto">
                                <input className="form-control shadow-lg my-2 bg-dark text-light btn-outline-info" type="submit" value="Submit message" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;