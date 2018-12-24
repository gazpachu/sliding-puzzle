import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import CONSTANTS from './constants';
import { slide } from './actions/actions';
import './styles/piece.css';

class Piece extends PureComponent {
  attemptSlide(pos) {
    const { order, slide } = this.props;
    let newPos = null;

    if (order[pos + 1] === null) {
      // console.log('Can move right');
      newPos = pos + 1;
    } else if (order[pos - 1] === null) {
      // console.log('Can move left');
      newPos = pos - 1;
    } else if (order[pos + CONSTANTS.COLUMNS] === null) {
      // console.log('Can move down');
      newPos = pos + CONSTANTS.COLUMNS;
    } else if (order[pos - CONSTANTS.COLUMNS] === null) {
      // console.log('Can move up');
      newPos = pos - CONSTANTS.COLUMNS;
    }

    if (newPos !== null) slide({ pos, newPos });
  }

  render() {
    const {
      index,
      pos,
      size,
      offsetY,
      offsetX,
      top,
      left
    } = this.props;

    return (<Fragment>
      <div
        className="piece"
        onClick={() => this.attemptSlide(pos)}
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

const mapStateToProps = ({
  mainReducer: {
    order
  }
}) => ({
  order
});

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
