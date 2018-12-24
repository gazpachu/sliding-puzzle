import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Piece from './piece';
import Info from './info';
import CONSTANTS from './constants';
import './styles/app.css';

const PIECE_SIZE = CONSTANTS.PUZZLE_SIZE / CONSTANTS.COLUMNS;

class App extends PureComponent {
  renderPieces() {
    console.log('renderPieces');
    const { order } = this.props;
    let offsetX = 0;
    let top = 0;

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
          index={index + 1}
          pos={i}
          key={`piece-${index}`}
        />);
      }
      return null;
    })
  }

  render() {
    const { gameOver } = this.props;
    return (
      <div className="app">
        <div className={`puzzle ${gameOver ? 'game-over' : ''}`}>
          {gameOver ? <div className="congrats">Congratulations. You win! Thanks for playing</div> : this.renderPieces()}
        </div>
        <Info size={PIECE_SIZE} />
        <footer className="footer">Sliding puzzle test with React and Redux for <a href="http://mediamonks.com">MediaMonks</a> by <a href="http://joanmira.com">Joan Mira</a> (<a href="https://github.com/gazpachu/sliding-puzzle">code</a>)</footer>
      </div>
    );
  }
}

const mapDispatchToProps = null;
const mapStateToProps = ({
  mainReducer: {
    order,
    gameOver
  }
}) => ({
  order,
  gameOver
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
