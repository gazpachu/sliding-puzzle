import React, { Component } from 'react';
import { connect } from 'react-redux';
import Piece from './Piece';
import Monks from './assets/monks.jpg';
import * as CONSTANTS from './constants';
import './styles/app.css';

const PIECE_SIZE = CONSTANTS.PUZZLE_SIZE / CONSTANTS.COLUMNS;

class App extends Component {
  render() {
    const { order } = this.props;
    let row = 0;
    let realRow = 0;

    return (
      <div className="App">
        <div className="puzzle">
          {order.map((index, i) => {
            row = Math.floor(i / CONSTANTS.COLUMNS) * PIECE_SIZE;
            realRow = Math.floor(index / CONSTANTS.COLUMNS) * PIECE_SIZE;
            return (<Piece
              size={PIECE_SIZE}
              row={row}
              column={i % CONSTANTS.COLUMNS}
              realRow={realRow}
              realColumn={index % CONSTANTS.COLUMNS}
              index={i+1}
              key={`piece-${index}`}
            />);
          })}
        </div>

        <img className="preview" src={Monks} alt="Preview" width={PIECE_SIZE} height={PIECE_SIZE} />
      </div>
    );
  }
}

const mapDispatchToProps = null;
const mapStateToProps = ({
  mainReducer: {
    order
  }
}) => ({
  order
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
