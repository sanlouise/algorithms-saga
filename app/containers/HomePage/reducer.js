/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_SORT_TYPE,
  UPDATE_LANGUAGE,
  UPDATE_EXAMPLE,
  UPDATE_SPACE_COMPLEXITY_WORST,
  UPDATE_TIME_COMPLEXITY_BEST,
  UPDATE_TIME_COMPLEXITY_WORST,
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
    case UPDATE_SORT_TYPE: {
      return state.set('', action.sortType);
    }
    case UPDATE_LANGUAGE: {
      return state.set('', action.language);
    }
    case UPDATE_EXAMPLE: {
      return state.set('', action.example);
    }
    case UPDATE_SPACE_COMPLEXITY_WORST: {
      return state.setIn(['complexities', 'space', 'worst'], action.spaceComplexityWorst);
    }
    case UPDATE_TIME_COMPLEXITY_BEST: {
      return state.setIn(['complexities', 'time', 'best'], action.timeComplexityBest);
    }
    case UPDATE_TIME_COMPLEXITY_WORST: {
      return state.setIn(['complexities', 'time', 'worst'], action.timeComplexityWorst);
    }
    default:
      return state;
  }
}

export default homePageReducer;
