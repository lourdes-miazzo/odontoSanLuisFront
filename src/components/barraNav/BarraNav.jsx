import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import icono from "./iconoLourdes.png"
import "./barraNav.css"

const BarraNav = () => {
  return (
    <>
            <Navbar collapseOnSelect expand="lg" className='gral'>
                <Navbar.Brand as={Link} to="/"><img src={icono}  className='icon'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navLinkOrder">
                        <Nav.Link as={Link} to="/api/nosotros" className='hvr-fade'>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/api/cursos" className='hvr-fade'>Cursos</Nav.Link>
                        <Nav.Link as={Link} to="/api/noticias" className='hvr-fade'>Noticias</Nav.Link>
                        <Nav.Link as={Link} to="/api/contacto" className='hvr-fade'>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </>
  )
}

export default BarraNav