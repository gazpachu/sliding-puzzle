import React, { Component } from 'react';
import Piece from './Piece';
import monks from './monks.jpg';
import './App.css';

const PUZZLE_SIZE = 500;
const COLUMNS = 4;
const TOTAL_PIECES = COLUMNS * COLUMNS;
const PIECE_SIZE = PUZZLE_SIZE / COLUMNS;

class App extends Component {
  createPieces() {
    const pieces = [];
    let row = 0;

    for (let i = 0; i < TOTAL_PIECES; i += 1) {
      row = (i > 0 && i % COLUMNS === 0) ? row += PIECE_SIZE : row;

      pieces.push(
        <Piece
          size={PIECE_SIZE}
          row={row}
          column={i % COLUMNS}
          index={i}
          key={`piece-${i}`}
        />
      );
    }

    return pieces;
  }

  render() {
    return (
      <div className="App">
        <div className="puzzle">
          {this.createPieces()}
        </div>

        <img className="preview" src={monks} alt="Preview" width={PIECE_SIZE} height={PIECE_SIZE} />
      </div>
    );
  }
}

export default App;
