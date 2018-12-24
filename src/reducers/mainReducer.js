import { COLUMNS } from '../constants';
import shuffle from '../Helpers';

const initialOrder = shuffle(Array.apply(null, {length: (COLUMNS*COLUMNS)}).map(Number.call, Number));
initialOrder[15] = null;

export default (state = {
  order: initialOrder
}, action) => {
  switch (action.type) {
    case 'ATTEMPT_SLIDE':
      const newOrder = state.order.slice();
      const index = newOrder.indexOf(action.payload);
      if (index !== -1) {
        newOrder[index] = null;
        newOrder[15] = action.payload;
      }
      return { ...state, order: newOrder };
    default: return state
  }
}
