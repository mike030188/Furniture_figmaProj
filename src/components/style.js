import styled from 'styled-components';
import backimg1 from '../assets/images/scanbackgr1.svg';



export const Body = styled.div`

`
export const NavBar = styled.div`
display: flex;
align-items: center;
height: 122px;
background-color: #FFF;
width:100%;
position: fixed;

`
export const Container = styled.div`
display: ${props=> props.right ? "flex" : ""};
flex: ${props=>props.left ? "1" : "1"};
justify-content: ${props=> props.right ? "right" : ""};
padding-left: 120px;
margin-right: 120px;

`
export const Menu = styled.div`
color: var(--font-color, #333);
font-size: 14px;
font-weight: 600;
line-height: normal;
margin-left: 70px;
cursor: pointer;

:hover {
    border: 1px solid;
    border-radius: 3px;
    color: var(--font-color, white);
    background-color: darkgreen;
    padding: 2px 4px;
    
}

`

export const Wrapper = styled.div`
background-color: #FCFCFC;
background-image: url(${backimg1});
background-repeat: no-repeat;
background-position: cover center;
height: 749px;
padding-top:153px;
`

export const Container1 = styled.div`
display: flex;
flex-direction: column;
width: 600px;
height: 443px;
border-radius: 10px;
background: #DFE9F4;
padding-left: 41px;
padding-top: 39px;
margin-left:680px;


h3{
    color: var(--font-color, #333);    
    font-size: 16px;   
    font-weight: 600;
    line-height: normal;
    letter-spacing: 3px;
}

h1{
    color: var(--primary-color, #054C73);    
    font-size: 52px;    
    font-weight: 700;
    line-height: 65px;
    margin-top: 20px;
}

p{
    color: var(--font-color, #333);    
    font-size: 18px;    
    font-weight: 500;
    line-height: 39px;
    margin-top: 20px;
}
`

export const Button = styled.button`
height: ${props=>props.buy ? "70px" : "68px"};
width: ${props=>props.buy ? "229px" : "153px"};
border-radius: ${props=>props.submit ? "3px" : "50px"};
background-color: var(--primary-color, #054C73);
align-items: flex-start;
color: #FFF;
font-size: 16px;
font-weight: 700;
line-height: normal;
cursor: pointer;
margin-top: 30px;
`

export const Usestate = styled.div`
p{
    color: var(--primary-color, #054C73);
    font-size: 30px;
    text-align: 'center';
    font-weight: 700;
    line-height: normal;
}

`
export const Button1 = styled.button`
height: 40px;
width: 50px;
border-radius:10px;
background-color: var(--primary-color, purple);
align-items: flex-start;
color: #FFF;
font-size: 28px;
cursor: pointer;

`

export const Wrapper1 = styled.div`
display: flex;
align-items: center;
height: 150px;
background: #F2F5FF;
`

export const Container2 = styled.div`
display: flex;
flex: 1;
justify-content: center;
margin-left: ${props=>props.left ? "30px" : ""};

`
export const Container3 = styled.div`
display: flex;
flex-direction: ${props=> props.foot ? "row" : "column"};

`

export const FooTer = styled.div`
display: flex;
background: #03344F;
height: 386px;
color: #FFF;
padding-left: 120px;
align-items: center;

h2{       
    font-size: 24px;    
    font-weight: 700;
    line-height: normal;
}

p{       
    font-size: 16px;    
    font-weight: 400;
    line-height: 35px;
    margin: 32px 0px;
}
`

export const Container4 = styled.div`
display: flex;
flex-direction: column;
flex: ${props=> props.left ? "2" : "4"};
`