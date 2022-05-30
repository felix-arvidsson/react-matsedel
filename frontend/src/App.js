import './App.css';
import NavbarTest from './components/navbar/navbartest'
import Welcome from './components/welcome/welcome'
import Recept from './components/recept/recept'
import SearchBox from './components/SearchBox/SearchBox'
import { Container } from 'postcss';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
      super()
      this.state =  {
      recept: [],
      searchfield: ''
    }
  }
    onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
  }

  render() {
    return (
      <div>
        <NavbarTest />
        <Recept />
      </div>
    )
  }
}

export default App;
