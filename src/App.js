import React, { Component } from 'react';
import './assets/stylesheets/main.css';
import Header from './components/Header.js';
import MainSection from './components/Main-section';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <MainSection />
      </div>
    );
  }
}

export default App;
