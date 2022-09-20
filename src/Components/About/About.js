import React, { Component } from 'react'
import { Title, Box, Info, Progress} from './style.js'
import axios from 'axios'

 class About extends Component {
  state = {
    skills:[]
  }


componentDidMount = () => {
  axios.get('js/data.json')
  .then(res =>{ 
    console.log(res.data.about)
    this.setState({skills :res.data.about})
  })
}


  render(){

    const data =this.state.skills
    const dataList =data.map(skill => {
      return(
        <Box>
        <Info>
        <span>{skill.skill}</span>
        <span>{skill.progress}%</span>
        </Info>
        <div className="progress">
          <Progress style={{width:`${skill.progress}%`}}></Progress>
        </div>
      </Box>
      )
    })

    return (
      <div style={{width:'40%'}}>
        <Title>Skills</Title>
      {dataList}
      </div>
    )
  }

}
export default About