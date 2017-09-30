/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  // Changes directly via user interaction
  sortType: '',
  language: '',
  // Changes indirectly via user interaction, via redux-saga
  example: '',
  complexities: {
    space: {
      worst: '',
    },
    time: {
      best: '',
      worst: '',
    },
  },
  // Static data
  availableSortTypes: [],
  availableLanguages: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
