import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar collapseOnSelect className="sticky-top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h1 className="fw-bold">Arunimaa <span className="text-success"> Aarushi</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">My Resume</Nav.Link>
                        <Nav.Link href="#pricing">Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;