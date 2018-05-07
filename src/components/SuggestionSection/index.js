import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class SuggestionSection extends Component {
  static propTypes = {
    heading: PropTypes.string,
    suggestionFilter: PropTypes.element,
    suggestionList: PropTypes.element
  };

  render() {
    const {
      heading,
      suggestionFilter,
      suggestionList
    } = this.props;

    return (
      <section className="suggestion-section">
        <div className="suggestion-section-header">
          <div className="suggestion-section-heading">
            {heading}
          </div>
          {suggestionFilter}
        </div>
        {
          suggestionList && (
            <div className="suggestion-section-block ">
              {suggestionList}
            </div>
          )
        }
      </section>
    );
  }
};
