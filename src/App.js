import React, { Component } from 'react';
import { connect } from 'react-redux';
import Piece from './Piece';
import Monks from './assets/monks.jpg';
import * as CONSTANTS from './constants';
import './styles/app.css';

const PIECE_SIZE = CONSTANTS.PUZZLE_SIZE / CONSTANTS.COLUMNS;

class App extends Component {
  constructor(props) {
    super(props);

    this.pieces = [];
  }

  renderPieces() {
    const { order } = this.props;
    let offsetX = 0;
    let top = 0;

    return order.map((index, i) => {
      offsetX = Math.floor(index / CONSTANTS.COLUMNS) * PIECE_SIZE;
      top = Math.floor(i / CONSTANTS.COLUMNS) * PIECE_SIZE;

      // console.log(index);

      if (order[i] !== null) {
        return (<Piece
          size={PIECE_SIZE}
          offsetX={offsetX}
          offsetY={order[i] % CONSTANTS.COLUMNS}
          top={top}
          left={i % CONSTANTS.COLUMNS}
          index={order[i]}
          pos={i}
          key={`piece-${index}`}
        />);
      }
      return null;
    })
  }

  render() {
    return (
      <div className="App">
        <div className="puzzle">
          {this.renderPieces()}
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
