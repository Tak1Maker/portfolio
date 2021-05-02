import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/LOGO.png'

import "./mynavbar.css";


const MyNavbar = () => {
    return (
        <>
        <Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">
    <img className="logo" src={Logo} alt='Mon Portfolio Logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Accueil</Nav.Link>
      <Nav.Link href="#pricing">A propos</Nav.Link>
      <Nav.Link href="#pricing">Connaissances</Nav.Link>
      <Nav.Link href="#pricing">Projets</Nav.Link>
      <Nav.Link href="#pricing">Parcours</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
            
        </>
    )
}

export default MyNavbar
