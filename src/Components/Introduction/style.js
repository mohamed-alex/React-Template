import styled from "styled-components";

const IntroductionDiv = styled.div`
margin-top:50px;
margin-bottom:50px;
padding:30px 0;
height: 500px;
background-image: url(images/creative/about-bg.jpg);
background-attachment: fixed;
background-size: cover;`

const Parent = styled.div`
width: 50%;
position: absolute;
right: 0;` 

const Title = styled.h1`
color: var(--text-color);
font-size: 50px;
margin: 30px auto;`

const Info = styled.h4`
color: var(--title-color);
font-size: 40px;
margin: 20px auto;
color:var(--main-color)`

const Disc =  styled.p`
color: var(--text-color);
line-height: 1.5;
font-size: 20px;`

export {IntroductionDiv, Parent, Title, Info, Disc}