import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import tpbazar from './tpbazar.png'
function Navbarr() {
  return (
    <Navbar  style={{backgroundColor:'grey'}}>
      <Container>
        <Navbar.Brand href="#logo"><img src={tpbazar}  alt='logo' width={60} style={{borderRadius:'30%', height:'30%'}}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-dark'>
          <h4 style={{fontFamily:'initial'}}><b> Welcome to Admin Dashboard</b></h4>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;