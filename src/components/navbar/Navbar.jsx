import React from 'react';
import logo from '../../assets/images/SkinClinic.png'
import { Container, Menu, NavBar } from '../style';

const Navbar = () => {
  return (
    <NavBar>
        <Container left>
            <img src={logo} alt="furniture logo" />
        </Container>
        <Container right>
            <Menu>Home</Menu>
            <Menu>Services</Menu>
            <Menu>Doctors</Menu>
            <Menu>Products</Menu>
            <Menu>Gallery</Menu>
        </Container>

    </NavBar>
  )
}

export default Navbar