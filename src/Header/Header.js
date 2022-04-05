import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <nav>

            <Navbar bg="light" expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'>AL-NUR <span className='text-danger'>CAR PARK</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"}

                                to="/home">HOME</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}

                                to='/reviewsection'>REVIEWS</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/dassboard">DASSBOARD</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/blogs">BLOGS</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/about">ABOUT</NavLink >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </nav>


    );
};

export default Header;