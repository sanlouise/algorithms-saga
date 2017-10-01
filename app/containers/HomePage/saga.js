// Dependencies
import { takeLatest, call, put, select } from 'redux-saga/effects';
// Externals
import request from 'utils/request';
// Internals
import {
  updateExampleAction,
  updateSpaceComplexityWorstAction,
  updateTimeComplexityBestAction,
  updateTimeComplexityWorstAction,
} from './actions';
import {
  UPDATE_SORT_TYPE,
  UPDATE_LANGUAGE,
} from './constants';
import {
  selectSortType,
  selectLanguage,
} from './selectors';


function* onUpdateSortType(action) {
  const language = yield select(selectLanguage());
  yield call(apiCall, language, action.sortType);
}

function* onUpdateLanguage(action) {
  const sortType = yield select(selectSortType());
  yield call(apiCall, action.language, sortType);
}

function* apiCall(language, sortType) {
  if (!language || !sortType) {
    return;
  }

  const requestUrl = `https://langsorts-api.herokuapp.com/?lang=${language}&alg=${sortType}`;
  try {
    const res = yield call(request, requestUrl);
    yield [
      put(updateExampleAction(res.algorithm)),
      put(updateSpaceComplexityWorstAction(res.space.worst)),
      put(updateTimeComplexityBestAction(res.time.best)),
      put(updateTimeComplexityWorstAction(res.time.worst)),
    ];
  } catch (error) {
    console.log('error', error);
  }
}

export default function* mainSaga() {
  yield takeLatest(UPDATE_SORT_TYPE, onUpdateSortType);
  yield takeLatest(UPDATE_LANGUAGE, onUpdateLanguage);
}
