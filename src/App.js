import React, { Component } from 'react';
import monks from './monks.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="puzzle">
          <div className="piece one" style={{ backgroundPosition: '0 0' }} />
          <div className="piece two" style={{ backgroundPosition: '-165px 0' }} />
          <div className="piece three" style={{ backgroundPosition: '-330px 0' }} />
          <div className="piece four" style={{ backgroundPosition: '0 -165px' }} />
          <div className="piece five" style={{ backgroundPosition: '-165px -165px' }} />
          <div className="piece six" style={{ backgroundPosition: '-330px -165px' }} />
          <div className="piece seven" style={{ backgroundPosition: '0 -330px' }} />
          <div className="piece eight" style={{ backgroundPosition: '-165px -330px' }} />
          <div className="piece nine" style={{ backgroundPosition: '-330px -330px' }} />
        </div>

        <img className="preview" src={monks} alt="Preview" width="100" />
      </div>
    );
  }
}

export default App;
