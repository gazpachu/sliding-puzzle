import { COLUMNS } from '../constants';
import shuffle from '../Helpers';

export default (state = {
  order: shuffle(Array.apply(null, {length: (COLUMNS*COLUMNS) - 1}).map(Number.call, Number))
}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
     return {
      result: action.payload
     }
    default:
    return state
  }
}
