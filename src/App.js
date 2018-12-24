import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Piece from './Piece';
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
        <div className="puzzle">
          {gameOver ? <div className="congrats">Well done!!!</div> : this.renderPieces()}
        </div>
        <Info size={PIECE_SIZE} />
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
