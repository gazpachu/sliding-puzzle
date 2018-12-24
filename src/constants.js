import { shuffle } from './helpers';

const columns = 4;

// Create an array of shuffled numbers to represent the order of the pieces in the puzzle
const lastPiece = (columns * columns) - 1;
const initialOrder = shuffle(Array.apply(null, {length: lastPiece}).map(Number.call, Number));
initialOrder[lastPiece] = null; // make the last piece always empty

const CONSTANTS = {
  PUZZLE_SIZE: 500,
  COLUMNS: columns,
  INITIAL_ORDER: initialOrder,
  SCORE: 1200000,

  // Redux actions
  SLIDE: 'SLIDE',
  INCREASE_TIME: 'INCREASE_TIME',
  END_GAME: 'END_GAME',
  CHEAT: 'CHEAT'
};

export default CONSTANTS;
