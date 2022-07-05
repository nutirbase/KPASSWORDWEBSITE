import React from "react";
import styled from "styled-components";
import Nbicon from "../../images/kivyicon.png";


var darkBlue = 'rgba(6, 39, 112, 1)';
// var lightBlue= 'rgba(198, 211, 240,1)'; 

const Nav = styled.nav`
  background: ${darkBlue};
  height: 60px;
  width:100%;
  position: absolute;
  top: 0;
  z-index: 99;
  align-items: center;
  display: flex;
`;
const NavBarContainer = styled.div`
display: flex;
// justify-content:space-between ;

z-index; 
width: 100%;
padding:0 25px;
gap:25%;
align-text:center;

`;
const NBIcon = styled.img`display:flex;justify-content: center; 
align-items: center;
width:40px; `;
const Paragraph = styled.p`color:white ;`;


export default function NavBar() {
  
  return (
    <>
      <Nav >
        
         <NavBarContainer>
             <NBIcon src= {Nbicon}></NBIcon>
              <Paragraph><b>Nutirbase App Forgot Password </b></Paragraph>
        </NavBarContainer>  
        
      </Nav>
    </>
  );
}