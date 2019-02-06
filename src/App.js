import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  // get inventory from database

  render() {
    return (
      <div className="App">
        I AM ALIVE!
      </div>
    );
  }
}

export default App;
