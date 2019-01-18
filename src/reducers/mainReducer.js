import CONSTANTS from '../constants';

export default (state = {
  order: CONSTANTS.INITIAL_ORDER,
  moves: 0,
  time: 0,
  score: CONSTANTS.SCORE,
  gameOver: false
}, action) => {
  switch (action.type) {
    case CONSTANTS.SLIDE: {
      // Switch tiles' positions
      const order = state.order.slice(0);
      const index = order[action.payload.pos];
      order[action.payload.pos] = null;
      order[action.payload.newPos] = index;

      // Increase moves
      const moves = state.moves + 1;

      return { ...state, order, moves };
    }
    case CONSTANTS.INCREASE_TIME: {
      let score = state.score - (1 + (state.moves ? state.moves : 0));
      score = score > 0 ? score : 0;
      return { ...state, time: action.payload, score };
    }
    case CONSTANTS.END_GAME: {
      return { ...state, gameOver: true }
    }
    case CONSTANTS.CHEAT: {
      const order = Array.apply(null, {length: (CONSTANTS.COLUMNS * CONSTANTS.COLUMNS) - 1}).map(Number.call, Number);
      order[14] = null;
      order[15] = 14;
      return { ...state, order };
    }
    default: return state
  }
}
