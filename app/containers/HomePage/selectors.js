import { createSelector } from 'reselect';

const selectHomePageDomain = (state) => state.get('homePage');

const selectSortType = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.get('sortType')
);

const selectLanguage = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.get('language')
);

const selectExample = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.get('example')
);

const selectSpaceComplexityWorst = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.getIn(['complexities', 'space', 'worst'])
);

const selectTimeComplexityBest = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.getIn(['complexities', 'time', 'best'])
);

const selectTimeComplexityWorst = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.getIn(['complexities', 'time', 'worst'])
);

const selectAvailableSortTypes = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.get('availableSortTypes').toJS()
);

const selectAvailableLanguages = () => createSelector(
  selectHomePageDomain,
  (homePage) => homePage.get('availableLanguages').toJS()
);

export {
  selectHomePageDomain,
  selectSortType,
  selectLanguage,
  selectExample,
  selectSpaceComplexityWorst,
  selectTimeComplexityBest,
  selectTimeComplexityWorst,
  selectAvailableSortTypes,
  selectAvailableLanguages,
};
