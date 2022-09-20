import React  from 'react'
import { NavLink } from 'react-router-dom'
import {NavbarDiv, Container, Logotitle, UlList, ListItem, Anchor, Links}  from './style.js'



export default function Navbar() {
  return (
    
   
    <NavbarDiv>
            
            <Container>
                
                <div className="logo">
                    <Logotitle>Ultra Profile</Logotitle>
                </div>
               
         
                
                <UlList>
                  <ListItem className="list-item"><Links to="/">Home</Links></ListItem>
                  <ListItem className="list-item"><Anchor to="#">Portfolio</Anchor></ListItem>
                  <ListItem className="list-item"><Anchor to="#">About</Anchor></ListItem>
                  <ListItem className="list-item"><Links to="contact">Contact</Links></ListItem>
                  <ListItem className="list-item"><Anchor to="#">Work</Anchor></ListItem>
                </UlList>
                
            </Container>
            
        </NavbarDiv>
  )
}
