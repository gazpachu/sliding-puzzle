import { createSelector } from 'reselect';

const order = state => state.mainReducer.order;

// Find the index of the empty tile in the grid
export const getEmptyTileIndex = createSelector(
  order,
  items => items.indexOf(null)
)
