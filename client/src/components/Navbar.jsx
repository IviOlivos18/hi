import React from "react";
import image from "../images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={image}
              alt="Hidro Crep"
              className="logo"
              width="80"
              height="80"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-link" to='/'>Inicio</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to='/Catalogo'>Catalogo</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to='/Arduino'>Arduino</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
