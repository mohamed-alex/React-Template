import React, { Component } from 'react'
import {WorksDiv, Title, Boxs, Container, Box, WorkName, Hr, WorkDisc, Icon} from './style.js'
import axios from 'axios'


 class Works extends Component {

  state = {
    works :[]
  }

  componentDidMount = () => {
    axios.get('js/data.json')
    .then(res => {
      this.setState({works : res.data.works})

    })
  }

  render(){
    const {works} = this.state;
    const dataList = works.map(work =>{
      return(
        <Box key={work.id}>
        <Icon className={work.icon_name}></Icon>
        <WorkName>{work.title}</WorkName>
      
        <Hr />
        <WorkDisc>{work.body}</WorkDisc>
        </Box>
      )
    })
    return (
      <WorksDiv>
        <Container>
            <Title>My Works</Title>
            <Boxs className="boxs">

                {dataList}
          </Boxs>
        </Container>
      </WorksDiv>
    )
  }
 
}

export default Works