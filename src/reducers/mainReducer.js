import { COLUMNS } from '../constants';
import { shuffle } from '../Helpers';

// Create an array of shuffled numbers to represent the pieces of the puzzle
const initialOrder = shuffle(Array.apply(null, {length: (COLUMNS*COLUMNS)}).map(Number.call, Number));
initialOrder[15] = null; // make the last piece always empty

export default (state = {
  order: initialOrder
}, action) => {
  switch (action.type) {
    case 'ATTEMPT_SLIDE':
      let newPos = null;
      if (state.order[action.payload + 1] === null) {
        console.log('Can move right');
        newPos = action.payload + 1;
      } else if (state.order[action.payload - 1] === null) {
        console.log('Can move left');
        newPos = action.payload - 1;
      } else if (state.order[action.payload + COLUMNS] === null) {
        console.log('Can move down');
        newPos = action.payload + COLUMNS;
      } else if (state.order[action.payload - COLUMNS] === null) {
        console.log('Can move up');
        newPos = action.payload - COLUMNS;
      }

      if (newPos !== null) {
        const newOrder = state.order.slice();
        const index = newOrder[action.payload];
        newOrder[action.payload] = null;
        newOrder[newPos] = index;
        return { ...state, order: newOrder };
      }
      return { ...state };
    default: return state
  }
}
