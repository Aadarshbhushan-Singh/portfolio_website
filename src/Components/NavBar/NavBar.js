import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Offcanvas, NavDropdown, Form, Button, Navbar, Container, Nav } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <>
            <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-buttons">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/aboutme" className="navbar-buttons">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className="navbar-buttons">Projects</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/contactme" className="navbar-buttons">Contact Me</Nav.Link>
                            {/* <Nav.Link eventKey={2} as={Link} to="/" className="navbar-buttons">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
