import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

import logo from '../../../images/logo.jpg';

const Header = () => {


    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img width={60} style={{ borderRadius: '8px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-warning' as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className='text-warning' href="home#experts">Courses</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-warning' as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='text-warning' as={Link} to='/about'>About</Nav.Link>

                        <Nav.Link className='text-warning' as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;