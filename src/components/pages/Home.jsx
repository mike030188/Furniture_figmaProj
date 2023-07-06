import React from 'react'
import { Button, Container1, Wrapper } from '../style'
import UseState from '../useState'

const Home = () => {
  return (
    <Wrapper>    
        <Container1>
        <h3>New Arrival</h3>
        <h1>Discover Our<br />
            New Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />
        elit tellus, luctusnec ullamcorper mattis.
        </p>
        <div style={{display: 'flex'}}>
            <Button buy  style={{marginRight: "100px"}}>BUY NOW</Button>
            <UseState/>
        </div>
        
        </Container1>
    </Wrapper>
  )
}

export default Home