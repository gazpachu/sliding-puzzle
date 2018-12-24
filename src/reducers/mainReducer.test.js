import mainReducer from './mainReducer';
import CONSTANTS from '../constants';

it('should return the initial state', () => {
  expect(mainReducer(undefined, {})).toEqual(
    {
      order: CONSTANTS.INITIAL_ORDER,
      moves: 0,
      time: 0,
      score: CONSTANTS.SCORE
    }
  );
});

it('should handle SLIDE', () => {
  expect(
    mainReducer({
      order: [4, 6, 15, 1, 9, 5, 2, 7, 8, 11, 13, 10, 12, 0, 14, null],
      moves: 0
    }, {
      type: CONSTANTS.SLIDE,
      payload: { pos: 11, newPos: 15 }
    })
  ).toEqual({
    order: [4, 6, 15, 1, 9, 5, 2, 7, 8, 11, 13, null, 12, 0, 14, 10],
    moves: 1
  });
});

it('should handle INCREASE_TIME', () => {
  expect(
    mainReducer({
      time: 0,
      score: CONSTANTS.SCORE
    }, {
      type: CONSTANTS.INCREASE_TIME,
      payload: 1
    })
  ).toEqual({
    time: 1,
    score: CONSTANTS.SCORE - 1
  });
});
