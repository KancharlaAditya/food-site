import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FoodSite</h1>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;
