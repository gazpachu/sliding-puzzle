import React, { Component } from 'react';
import monks from './monks.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="puzzle">
          <div className="piece one" />
          <div className="piece two" style={{ backgroundPosition: '-165px 0' }} />
          <div className="piece three" style={{ backgroundPosition: '-330px 0' }} />
          <div className="piece four" />
          <div className="piece five" />
          <div className="piece six" />
          <div className="piece seven" />
          <div className="piece eight" />
        </div>

        <img className="preview" src={monks} alt="Preview" width="100" />
      </div>
    );
  }
}

export default App;
