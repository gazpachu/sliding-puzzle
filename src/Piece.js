import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { slide } from './actions/actions';
import './styles/piece.css';

class Piece extends Component {
  render() {
    const {
      index,
      pos,
      size,
      offsetY,
      offsetX,
      top,
      left,
      slide
    } = this.props;

    return (<Fragment>
      <div
        className="piece"
        onClick={() => slide(pos)}
        style={{
          width: size,
          height: size,
          top: `${top}px`,
          left: `${size * left}px`,
          backgroundPosition: `-${offsetY * size}px -${offsetX}px`
        }}
      >
        <span>{index}</span>
      </div>
    </Fragment>);
  }
}

const mapDispatchToProps = {
  slide
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
