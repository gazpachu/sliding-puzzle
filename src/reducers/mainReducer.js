import CONSTANTS from '../constants';

export default (state = {
  order: CONSTANTS.INITIAL_ORDER,
  moves: 0,
  time: 0,
  score: CONSTANTS.SCORE
}, action) => {
  switch (action.type) {
    case 'SLIDE':
      // Switch tiles' positions
      console.log(action.payload);
      const order = state.order.slice();
      const index = order[action.payload.pos];
      order[action.payload.pos] = null;
      order[action.payload.newPos] = index;

      // Increase moves
      const moves = state.moves + 1;

      return { ...state, order, moves };

    case 'INCREASE_TIME':
      const score = state.score - (1 + state.moves);
      return { ...state, time: action.payload, score };

    default: return state
  }
}
