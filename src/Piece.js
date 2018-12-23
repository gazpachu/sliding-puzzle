import React, { Component, Fragment } from 'react';
import './styles/piece.css';

class Piece extends Component {
  render() {
    const { index, size, column, row, realRow, realColumn } = this.props;

    return (<Fragment>
      <div
        className="piece"
        style={{
          width: size,
          height: size,
          top: `${realRow}px`,
          left: `${size * realColumn}px`,
          backgroundPosition: `-${column * size}px -${row}px`
        }}
      >
        <span>{index}</span>
      </div>
    </Fragment>);
  }
}

export default Piece;
