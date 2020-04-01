import React, { Component } from 'react';
import './App.css';
import {CardList } from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    //**this is the equivalent of saying: 
    //** const monsters = this.state.monsters;
    //** const searchField = this. state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Roladex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;