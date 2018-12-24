import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { attemptSlide } from './actions/actions';
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
      attemptSlide
    } = this.props;

    return (<Fragment>
      <div
        className="piece"
        onClick={() => attemptSlide(pos)}
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
  attemptSlide
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
