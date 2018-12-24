import { shuffle } from './Helpers';

const columns = 4;

// Create an array of shuffled numbers to represent the order of the pieces in the puzzle
const initialOrder = shuffle(Array.apply(null, {length: (columns * columns)}).map(Number.call, Number));
initialOrder[15] = null; // make the last piece always empty

const CONSTANTS = {
  PUZZLE_SIZE: 500,
  COLUMNS: columns,
  INITIAL_ORDER: initialOrder,
  SCORE: 1200000,

  // Redux actions
  SLIDE: 'SLIDE',
  INCREASE_TIME: 'INCREASE_TIME'
};

export default CONSTANTS;
