import React ,{ Component }from 'react'
import axios from 'axios'
import {Title, List, ListItem} from './style.js'

class Profile extends Component{

  state ={
    profile:{}
    
  }

  componentDidMount = () => {
    axios.get('js/data.json')
    .then(res =>this.setState({profile: res.data.profile}))
  }

  render(){
    
    return (
      <div style={{width:'40%'}}>
          <Title>My Profile</Title>
          <List>
            <ListItem>Name: {this.state.profile.name}</ListItem>
            <ListItem>Birthday: {this.state.profile.birthday}</ListItem>
            <ListItem>Address: {this.state.profile.adress}</ListItem>
            <ListItem>Phone: {this.state.profile.phone}</ListItem>
            <ListItem>Email: {this.state.profile.email}</ListItem>
            <ListItem>Website: {this.state.profile.webSite}</ListItem>
          </List>
      </div>
    )
  }

}

export default Profile