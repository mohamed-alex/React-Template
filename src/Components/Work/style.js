import styled from 'styled-components'

const WorksDiv = styled.div`
margin-top:70px`

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

const Boxs = styled.div`
dislay:flex;
justify-content:space-between`

const Icon = styled.i`
display:block;
text-align:center;
margin: 45px auto;
font-size: 65px;
color: var(--main-color);`

const Box = styled.div`
width:30%;
background-color:#eee`
 
const WorkName = styled.h4`
font-size:20px;
text-align:center;
color:var(--main-color);
padding:10px;
`

const Hr = styled.hr`
width:75%;
margin:auto
color:var(--main-color)`

const WorkDisc = styled.p`
paddin: 10px;
line-height:1.3;
text-align:center;
`

export {WorksDiv, Title, Boxs, Container, Box, WorkName, Hr, WorkDisc, Icon}