import React from 'react';
import { Container2, Container3, Wrapper1 } from '../style';
import car from '../../assets/images/car.png';
import hour from '../../assets/images/24 hour.png';
import shield from '../../assets/images/shield-1 1.png';

const Services = () => {
  return (
    <Wrapper1>
        <Container2 left>
            <img src={car} alt="" />
                <Container3>
                    <h2>Free Delivery</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Container3>
        </Container2>   
        <Container2 mid>
            <img src={hour} alt="" />
                <Container3>
                    <h2>Support 24/7</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Container3>
        </Container2> 
        <Container2 right>
            <img src={shield} alt="" />
                <Container3>
                    <h2>100% Authentic</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Container3>
        </Container2>        
    </Wrapper1>
  )
}

export default Services