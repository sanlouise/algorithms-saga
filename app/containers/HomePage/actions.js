
/*
 *
 * HomePage actions
 *
 */

import {
  UPDATE_SORT_TYPE,
  UPDATE_LANGUAGE,
  UPDATE_EXAMPLE,
  UPDATE_SPACE_COMPLEXITY_WORST,
  UPDATE_TIME_COMPLEXITY_BEST,
  UPDATE_TIME_COMPLEXITY_WORST,
} from './constants';

export function updateSortTypeAction(sortType) {
  return {
    type: UPDATE_SORT_TYPE,
    sortType,
  };
}

export function updateLanguageAction(language) {
  return {
    type: UPDATE_LANGUAGE,
    language,
  };
}

export function updateExampleAction(example) {
  return {
    type: UPDATE_EXAMPLE,
    example,
  };
}

export function updateSpaceComplexityWorstAction(spaceComplexityWorst) {
  return {
    type: UPDATE_SPACE_COMPLEXITY_WORST,
    spaceComplexityWorst,
  };
}

export function updateTimeComplexityBestAction(timeComplexityBest) {
  return {
    type: UPDATE_TIME_COMPLEXITY_BEST,
    timeComplexityBest,
  };
}

export function updateTimeComplexityWorstAction(timeComplexityWorst) {
  return {
    type: UPDATE_TIME_COMPLEXITY_WORST,
    timeComplexityWorst,
  };
}
