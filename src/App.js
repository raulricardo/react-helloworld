import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import NewCharacter from './components/new_character/new_character.js'
import CharacterList from './components/character_list/character_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <NewCharacter />
        <CharacterList />
      </div>
    );
  }
}

export default App;
