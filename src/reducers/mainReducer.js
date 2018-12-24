import { COLUMNS } from '../constants';
import { shuffle } from '../Helpers';

// Create an array of shuffled numbers to represent the order of the pieces in the puzzle
const initialOrder = shuffle(Array.apply(null, {length: (COLUMNS*COLUMNS)}).map(Number.call, Number));
initialOrder[15] = null; // make the last piece always empty

export default (state = {
  order: initialOrder,
  moves: 0,
  time: 0,
  score: 1200000
}, action) => {
  switch (action.type) {
    case 'SLIDE':
      let newPos = null;
      if (state.order[action.payload + 1] === null) {
        // console.log('Can move right');
        newPos = action.payload + 1;
      } else if (state.order[action.payload - 1] === null) {
        // console.log('Can move left');
        newPos = action.payload - 1;
      } else if (state.order[action.payload + COLUMNS] === null) {
        // console.log('Can move down');
        newPos = action.payload + COLUMNS;
      } else if (state.order[action.payload - COLUMNS] === null) {
        // console.log('Can move up');
        newPos = action.payload - COLUMNS;
      }

      if (newPos !== null) {
        // Switch tiles' positions
        const order = state.order.slice();
        const index = order[action.payload];
        order[action.payload] = null;
        order[newPos] = index;

        // Increase moves
        const moves = state.moves + 1;

        return { ...state, order, moves };
      }
      return { ...state };

    case 'INCREASE_TIME':
      const score = state.score - (1 + state.moves);
      return { ...state, time: action.payload, score };

    default: return state
  }
}
