import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
                <Link style={{textDecoration:"none", color:"black"}} to={"/home"}> Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link style={{textDecoration:"none", color:"black"}} to={"/register"}>Register</Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link style={{textDecoration:"none", color:"black"}} to={"/login"}>Login</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header