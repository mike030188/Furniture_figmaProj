import React from 'react';
import { Body } from './style';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';

const FurnitureApp = () => {
  return (
    <Body>        
        <Navbar/>
        <Home/>
        <Services/>
    </Body>
  )
}

export default FurnitureApp