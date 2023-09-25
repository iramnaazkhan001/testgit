import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
    return (
        <>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home" style={{color:'white'}}>LOGO</Navbar.Brand>
                    <h2 style={{color:'white'}}>Admin Mangement System</h2>
                </Container>
            </Navbar>
        </>
    )
}

export default Nav;