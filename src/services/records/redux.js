// Utils
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

// Root reducer
export function records(state, action) {
  // TODO: implement reducer...
  return state;
}

// Selectors
export const getRecords = createSelector(
  (state) => state?.records,
  (records) => records
);

// TODO: implement selectors...
