import './App.css';
import Person from './Person/Person';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
