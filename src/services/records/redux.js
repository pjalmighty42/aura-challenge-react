// Utils
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

const RECORD_TYPES = {
  FETCH_RECORDS: "FETCH_RECORDS"
};

const initalState = {
  data: []
};

// Root reducer
export function records(state = initalState, action) {
  // TODO: implement reducer...
  switch(action.type){
    case RECORD_TYPES.FETCH_RECORDS:
      return {
        
      }
    default:
      return state;
  }
}

// Selectors
export const getRecords = createSelector(
  (state) => state?.records,
  (records) => records
);

// TODO: implement selectors...
