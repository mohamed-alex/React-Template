import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';


import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index/Index'
import Contact from './Components/Contact/Contact'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Index} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
        
     
    );
  }
}

export default App;
