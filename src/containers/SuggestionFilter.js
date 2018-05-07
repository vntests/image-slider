import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSuggestionList, clearSuggestionList } from '../actions/suggestion';

import SuggestionFilter from '../components/SuggestionFilter';

class SuggestionFilterContainer extends Component {
  static propTypes = {
    getSuggestionList: PropTypes.func.isRequired,
    clearSuggestionList: PropTypes.func.isRequired
  };

  render() {
    const { getSuggestionList, clearSuggestionList } = this.props;

    return (
      <SuggestionFilter
        clearSuggestionList={clearSuggestionList}
        getSuggestionList={getSuggestionList}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSuggestionList: (options) => {
    dispatch(getSuggestionList(options));
  },
  clearSuggestionList: () => {
    dispatch(clearSuggestionList());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SuggestionFilterContainer);
