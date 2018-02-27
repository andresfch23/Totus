import React, { Component } from 'react';
import './assets/stylesheets/main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
