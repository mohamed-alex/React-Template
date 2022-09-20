import styled from 'styled-components'

 const HomeDiv = styled.div`
    background-image: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position:center;
    height:500px;
    padding: 30px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const HomeTitle = styled.h1`
    text-align: center;
    color:var(--title-color);
    font-size: 60px;
    margin: 90px auto 20px;

    @media (max-width : 768px){
       font-size:40px
    }
`
const HomeInfo = styled.h4`
    margin: 20px auto;
    font-size: 35px;
    text-align: center;
    color:var(--main-color)
`
const HomeDisc = styled.p`
 color:var(--text-color);
 text-align: center;
 width: 50%;
 margin: auto
`
const HomeBtn = styled.button`
    display: block;
    margin:15px auto;
    color:white;
    background-color: var(--main-color);
    border:none;
    padding:10px 15px;
    font-size: 25px;
    `

    export {HomeDiv, Container, HomeTitle, HomeDisc, HomeInfo, HomeBtn}