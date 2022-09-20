import React from 'react'
import {HomeDiv, Container, HomeTitle, HomeDisc, HomeInfo, HomeBtn} from './style.js'
import styled from 'styled-components'


export default function Home() {
  return (
    <HomeDiv>
      <Container>
        <HomeTitle>Mohamed Elsayed</HomeTitle>
        <HomeInfo>Creative Director</HomeInfo>
        <HomeDisc>Iam a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.</HomeDisc>
        <HomeBtn>Let`s Begin</HomeBtn>
      </Container>
    </HomeDiv>
  )
}
