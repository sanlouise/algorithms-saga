import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/ocean.css';

class AlgorithmData extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    language: PropTypes.string.isRequired,
    sortType: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
    spaceComplexityWorst: PropTypes.string.isRequired,
    timeComplexityBest: PropTypes.string.isRequired,
    timeComplexityWorst: PropTypes.string.isRequired,
  };

  render() {
    const { language, sortType, example, spaceComplexityWorst, timeComplexityBest, timeComplexityWorst } = this.props;

    if (!language || !sortType) {
      return (
        <div className="algorithm-data">
          <h1>Make your selection!</h1>
        </div>
      );
    }

    return (
      <div className="algorithm-data">
        <h1>{sortType} algorithm in {language}</h1>
        <table>
          <tr>
            <th>Space Complexity Worst</th>
            <th>Time Complexity Best</th>
            <th>Time Complexity Worst</th>
          </tr>
          <tr>
            <td>{spaceComplexityWorst}</td>
            <td>{timeComplexityBest}</td>
            <td>{timeComplexityWorst}</td>
          </tr>
        </table>
        <Highlight className={language}>{example}</Highlight>
      </div>
    );
  }
}

export default AlgorithmData;
