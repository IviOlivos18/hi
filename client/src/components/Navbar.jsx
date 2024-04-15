import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faBook,faMicrochip } from "@fortawesome/free-solid-svg-icons";
import './Nav.css'

const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            
          </Navbar.Brand>
          
        </Container>
        <Nav className="me-auto">
          <Nav.Link className="home"><Link className="nav-link init" to='/'><FontAwesomeIcon className="house" icon={faHouse} />Inicio</Link></Nav.Link>
          <Nav.Link className="colage"><Link className="nav-link colage" to='/Catalogo'><FontAwesomeIcon className="colage" icon={faBook} />Catalogo</Link></Nav.Link>
          <Nav.Link className="arduino"><Link className="nav-link arduino" to='/Arduino'><FontAwesomeIcon className="arduino" icon={faMicrochip} />Arduino</Link></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default navbar;
