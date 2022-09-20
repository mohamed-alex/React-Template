import React, { Component } from 'react'
import axios from 'axios'
import {PortfolioDiv, Title, Container, List, ListItem, Boxs, Box, Img, Overlay, Span} from './style.js'

 class Portfolio extends Component {
  state = {
    portfolio :[]
  }

  componentDidMount = () => {
    axios.get('js/data.json')
    .then(res => {
      this.setState({portfolio: res.data.portfolio})
      
    })
  }
  
 
  render(){
    const {portfolio} = this.state;
    const dataList = portfolio.map(port =>{
      return(
        <Box key={port.id}>
          <Img src={port.image} alt="" />
          <Overlay>
            <Span>Show Image</Span>
          </Overlay>
      </Box>
      )
     })
    return (
      <PortfolioDiv>
        <Container>
          <Title>Portfolio</Title>
          <List>
            <ListItem active='active'>All</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>Photoshop</ListItem>
            <ListItem>Wordpress</ListItem>
            <ListItem>Mobile</ListItem>
          </List>
          <Boxs>

         {dataList}
    
          </Boxs>
        </Container>
       
      </PortfolioDiv>
    )
  }

}

export default Portfolio