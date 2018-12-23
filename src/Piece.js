import React, { Component, Fragment } from 'react';
import './Piece.css';

class Piece extends Component {
  render() {
    const { index, size, column, row } = this.props;

    return (<Fragment>
      <div
        className="piece"
        style={{
          width: size,
          height: size,
          top: `${row}px`,
          left: `${size * column}px`,
          backgroundPosition: `-${column * size}px -${row}px`
        }}
      >
        <span>{index}</span>
      </div>
    </Fragment>);
  }
}

export default Piece;
