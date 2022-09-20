import styled from "styled-components";

const Title = styled.h1`
margin:20px auto;
color:var(--main-color);
text-align:center;
font-size:60px;
width:fit-content;
padding:10px;
`
const Box = styled.div`
background:#eee;
padding:15px;
margin-bottom: 15px;
border-radius:5px`

const Info = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:15px`

const Progress = styled.span`
display:block;
height:3px;
background-color:var(--main-color);
`


export {Title, Box, Info, Progress}
