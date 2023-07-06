import React from 'react';
import { Body } from './style';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Foter from './footer/Footer';

const FurnitureApp = () => {
  return (
    <Body>        
        <Navbar/>
        <Home/>
        <Services/>
        <Foter/>
    </Body>
  )
}

export default FurnitureApp