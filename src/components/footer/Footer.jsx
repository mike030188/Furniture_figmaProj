import React from 'react';
import { Container3, Container4, FooTer } from '../style';
import ig1 from "../../assets/images/IG-1.png";
import ig2 from "../../assets/images/IG-2.png";
import ig3 from "../../assets/images/IG-3.png";
import ig4 from "../../assets/images/IG-4.png";



const Footer = () => {
  return (
    <FooTer>
        <Container4 left>
          <h2>Beauty Care</h2>
          <p>Do eiusmod tempor incididunt ut labore et<br/>
           dolore magna aliqua. Ut enim ad minim veniam,<br/>
           quis nostrud exercitation ullamco laboris.          
          </p>
          <h2>Follow Us</h2>
        </Container4>
        <Container4 right>
          <h2 style={{marginBottom:"20px"}}>Instagram Shop</h2>
          <Container3 foot>
            <img src={ig1} alt="" style={{marginRight:"20px"}}/>
            <img src={ig2} alt="" style={{marginRight:"20px"}}/>
            <img src={ig3} alt="" style={{marginRight:"20px"}}/>
            <img src={ig4} alt="" />
          </Container3>          
        </Container4>
    </FooTer>
  )
}

export default Footer