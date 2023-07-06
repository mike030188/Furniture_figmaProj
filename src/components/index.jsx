import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import { Body } from './style'

const FurnitureApp = () => {
  return (
    <Body>        
        <Navbar/>
        <Home/>
        
    </Body>
  )
}

export default FurnitureApp