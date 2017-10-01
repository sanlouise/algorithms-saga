// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// Externals
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AlgorithmData from 'components/AlgorithmData';
// Internals
import {
  updateLanguageAction,
  updateSortTypeAction,
} from './actions';
import {
  selectSortType,
  selectLanguage,
  selectExample,
  selectSpaceComplexityWorst,
  selectTimeComplexityBest,
  selectTimeComplexityWorst,
  selectAvailableSortTypes,
  selectAvailableLanguages,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';


class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { availableLanguages, updateLanguage, availableSortTypes, updateSortType, language, sortType, example, spaceComplexityWorst, timeComplexityBest, timeComplexityWorst } = this.props;

    return (
      <div>
        <Helmet>
          <title>LangSort | Home</title>
          <meta name="description" content="This is the homepage!" />
        </Helmet>

        <div className="wrapper">
          <div className="sidebar">
            <div className="title">
              <h1>Sorty</h1>
            </div>

            <h2>Select a Language</h2>

            {map(availableLanguages, (availableLanguage) => (
              <div key={availableLanguage} className="available-language">
                <input
                  onChange={(event) => updateLanguage(event.target.value)}
                  id={availableLanguage}
                  name="language"
                  type="radio"
                  value={availableLanguage}
                />
                <label htmlFor={availableLanguage}>{availableLanguage}</label>
              </div>
            ))}

            <h2>Select an Algorithm</h2>

            {map(availableSortTypes, (availableSortType) => (
              <div key={availableSortType} className="available-sort-type">
                <input
                  onChange={(event) => updateSortType(event.target.value)}
                  id={availableSortType}
                  name="algorithm"
                  type="radio"
                  value={availableSortType}
                />
                <label htmlFor={availableSortType}>{availableSortType}</label>
              </div>
            ))}
          </div>

          <AlgorithmData
            language={language}
            sortType={sortType}
            example={example}
            spaceComplexityWorst={spaceComplexityWorst}
            timeComplexityBest={timeComplexityBest}
            timeComplexityWorst={timeComplexityWorst}
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  sortType: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  spaceComplexityWorst: PropTypes.string.isRequired,
  timeComplexityBest: PropTypes.string.isRequired,
  timeComplexityWorst: PropTypes.string.isRequired,
  availableSortTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  availableLanguages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  updateSortType: PropTypes.func.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sortType: selectSortType(),
  language: selectLanguage(),
  example: selectExample(),
  spaceComplexityWorst: selectSpaceComplexityWorst(),
  timeComplexityBest: selectTimeComplexityBest(),
  timeComplexityWorst: selectTimeComplexityWorst(),
  availableSortTypes: selectAvailableSortTypes(),
  availableLanguages: selectAvailableLanguages(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateLanguage: (language) => dispatch(updateLanguageAction(language)),
    updateSortType: (sortType) => dispatch(updateSortTypeAction(sortType)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
