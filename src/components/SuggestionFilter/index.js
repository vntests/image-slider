import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class SuggestionFilter extends Component {
  static propTypes = {
    getSuggestionList: PropTypes.func.isRequired,
    clearSuggestionList: PropTypes.func.isRequired
  };

  render() {
    return (
      <form className="suggestion-filter" onSubmit={e => { this.onSubmit(e) }} noValidate>
        <div className="suggestion-filter-group">
          <label className="suggestion-filter-label" htmlFor="suggestionFilterDateFrom">
            From:
          </label>
          <input className="suggestion-filter-control" id="suggestionFilterDateFrom" name="dateFrom" type="date" placeholder="" />
        </div>
        <div className="suggestion-filter-group">
          <label className="suggestion-filter-label" htmlFor="suggestionFilterDateTo">
            To:
          </label>
          <input className="suggestion-filter-control" id="suggestionFilterDateTo" name="dateTo" type="date" placeholder="" />
        </div>
        <button className="suggestion-filter-submit" type="submit">
          Search
        </button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    const { getSuggestionList, clearSuggestionList } = this.props;
    const dateFrom = e.target.dateFrom.value;
    const dateTo = e.target.dateTo.value;

    clearSuggestionList();

    getSuggestionList({
      dateFrom,
      dateTo
    });
  }
};
