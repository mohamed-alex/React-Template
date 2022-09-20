import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Container = styled.div`
display: flex;
justify-content: space-between;
width: 85%; 
margin :auto`

const NavbarDiv = styled.div`
background: #fff;
position: relative;
border-bottom: 1px solid #000`

const Logotitle = styled.h2`
font-size: 30px;
font-weight: bold;`


const UlList = styled.ul`
list-style: none;
display: flex;
align-items: center;`

const ListItem = styled.li`
display: inline-block;`

const Anchor = styled.a`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
transition: .5s;
&:hover {color: var(--main-color)}`

const Links = styled(NavLink)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
transition: .5s;
&:hover {color: var(--main-color)}`

export {NavbarDiv, Container, Logotitle, UlList, ListItem, Anchor, Links}