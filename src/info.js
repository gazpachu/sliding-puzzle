import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getEmptyTileIndex } from './selectors'
import { increaseTime, endGame, cheat } from './actions/actions';
import { consecutive } from './helpers';
import Image from './assets/image.jpg';
import './styles/info.css';

class Info extends PureComponent {
  componentWillReceiveProps(newProps) {
    // Start Timer in the first move
    if (newProps.moves === 1 && newProps.time === 0) {
      console.log('start time');
      this.interval = setInterval(() => this.props.increaseTime(this.props.time + 1), 1000);
    }

    if (newProps.moves !== this.props.moves) {
      // End game if all the tiles are in the right position
      if (consecutive(newProps.order)) {
        clearInterval(this.interval);
        this.props.endGame();
      }
    }
  }

  render() {
    const { moves, time, score, cheat, size, emptyTileIndex } = this.props;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
      <div className="info">
        <img className="preview" src={Image} alt="Preview" width={size} height={size} />
        <div className="details">
          <div className="empty">Empty index: {emptyTileIndex}</div>
          <div className="moves">Moves: {moves}</div>
          <div className="time">Time: {minutes}m {seconds}s</div>
          <div className="score">Score: {score}</div>
        </div>
        <button className="cheat" onClick={() => cheat()}>cheat ¯\(°_o)/¯</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increaseTime,
  cheat,
  endGame
};

const mapStateToProps = state => {
  return {
    order: state.mainReducer.order,
    moves: state.mainReducer.moves,
    score: state.mainReducer.score,
    time: state.mainReducer.time,
    emptyTileIndex: getEmptyTileIndex(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
