import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    // SAME AS:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <input 
        type='search'
        placeholder='Search monsters'
        onChange={e => this.setState({ searchField: e.target.value })} 
      />  
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
