import styled from 'styled-components'

const PortfolioDiv = styled.div`
margin-top:70px;
margin-bottom:70px;
background-color:#eee;
padding-top:50px;
padding-bottom:50px;
`

const Title = styled.h1`
margin:20px auto;
color:var(--title-color);
text-align:center;
font-size:50px;
border-bottom:3px solid var(--main-color);
width:fit-content;
padding:10px;
`

const Container = styled.div`
width: 85%; 
margin :auto`

const List = styled.ul`
list-style:none;
display:flex;
justify-content: space-evenly;
margin :20px auto;
width:60%`

const ListItem = styled.li`
background-color:${props => props.active ? '#eb5424' : ''};
color:${props => props.active ? '#fff' : ''};
padding:5px
`

const Boxs = styled.div`
dispaly :flex;
flex-wrap:wrap;
`

const Box = styled.div`
width:25%;
position:relative;
cursor: pointer;
&:hover > div {opacity:1};`
// &:hover ${Overlay} {opacity:1}`

const Img = styled.img`
width:100%`

const Overlay = styled.div`
position:absolute;
top:0;
left:0;
background:#ff00005c;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
transition: .5s;
opacity:0
`

const Span = styled.span`
background-color: #fff;
padding: 5px;
border: 1px solid var(--main-color);`


export {PortfolioDiv, Title, Container, List, ListItem, Boxs, Box, Img, Overlay, Span}