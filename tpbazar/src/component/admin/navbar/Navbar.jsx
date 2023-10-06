import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import logo from './logo.png'
function Navbarr() {
  return (
    <Navbar  style={{backgroundColor:'black'}}>
      <Container>
        <Navbar.Brand href="#logo"><img src={logo}  alt='logo' height={50} width={100} style={{borderRadius:'50%'}}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
          Welcome to admin dashboard
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;