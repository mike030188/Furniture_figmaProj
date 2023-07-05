import styled from 'styled-components';
import backimg1 from '../assets/images/scanbackgr1.svg';



export const Body = styled.div`
background-color: #FCFCFC;
background-image: url(${backimg1});
background-repeat: no-repeat;
background-position: cover center ;
height: 100vh;
`

export const NavBar = styled.div`
display: flex;
align-items: center;
height: 122px;
background-color: #FFF;
width: 100%;

`
export const Container = styled.div`
display: ${props=> props.right ? "flex" : ""};
flex: ${props=>props.left ? "1" : "1"};
justify-content: ${props=> props.right ? "right" : ""};
padding-left: 120px;
padding-right: 120px;

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
