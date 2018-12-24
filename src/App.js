import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseTime } from './actions/actions';
import { consecutive } from './Helpers';
import Piece from './Piece';
import Monks from './assets/monks.jpg';
import * as CONSTANTS from './constants';
import './styles/app.css';

const PIECE_SIZE = CONSTANTS.PUZZLE_SIZE / CONSTANTS.COLUMNS;

class App extends Component {
  componentWillReceiveProps(newProps) {
    // Start Timer in the first move
    if (newProps.moves === 1 && newProps.time === 0) {
      this.interval = setInterval(() => this.props.increaseTime(this.props.time + 1), 1000);
    }
  }

  renderPieces() {
    const { order } = this.props;
    let offsetX = 0;
    let top = 0;

    if (consecutive(order)) {
      clearInterval(this.interval);
      return <div className="congrats">Well done!!!</div>;
    } else {
      return order.map((index, i) => {
        offsetX = Math.floor(index / CONSTANTS.COLUMNS) * PIECE_SIZE;
        top = Math.floor(i / CONSTANTS.COLUMNS) * PIECE_SIZE;

        if (index !== null) {
          return (<Piece
            size={PIECE_SIZE}
            offsetX={offsetX}
            offsetY={index % CONSTANTS.COLUMNS}
            top={top}
            left={i % CONSTANTS.COLUMNS}
            index={index}
            pos={i}
            key={`piece-${index}`}
          />);
        }
        return null;
      })
    }
  }

  render() {
    const { moves, time, score } = this.props;

    return (
      <div className="app">
        <div className="puzzle">
          {this.renderPieces()}
        </div>

        <img className="preview" src={Monks} alt="Preview" width={PIECE_SIZE} height={PIECE_SIZE} />
        <div className="info">
          <div className="moves">Moves: {moves}</div>
          <div className="time">Time: {time}s</div>
          <div className="score">Score: {score}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increaseTime
};

const mapStateToProps = ({
  mainReducer: {
    order,
    moves,
    score,
    time
  }
}) => ({
  order,
  moves,
  score,
  time
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
