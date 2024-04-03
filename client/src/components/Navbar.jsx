import React from "react";
import image from "../images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img
              src={image}
              alt="Hidro Crep"
              className="logo"
              width="60"
              height="60"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-link init" to='/'>Inicio</Link></Nav.Link>
            <Nav.Link><Link className="nav-link colage" to='/Catalogo'>Catalogo</Link></Nav.Link>
            <Nav.Link><Link className="nav-link arduino" to='/Arduino'>Arduino</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
