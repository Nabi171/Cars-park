import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <nav>

            <Navbar bg="light" expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home">World All Classico Countries</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='nav-link' to="/home">HOME</Link>
                            <Link className='nav-link' to="/reviews">REVIEWS</Link>
                            <Link className='nav-link' to="/dassboard">DASSBOARD</Link>
                            <Link className='nav-link' to="/blogs">BLOGS</Link>
                            <Link className='nav-link' to="/about">ABOUT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </nav>


    );
};

export default Header;