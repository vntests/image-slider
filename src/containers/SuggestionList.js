import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSuggestionList } from '../actions/suggestion';

import SuggestionList from '../components/SuggestionList';

class SuggestionListContainer extends Component {
  static propTypes = {
    suggestionList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      }),
      date: PropTypes.shape({
        from: PropTypes.string,
        to:   PropTypes.string
      })
    })),
    getSuggestionList: PropTypes.func.isRequired
  };

  render() {
    const { suggestionList } = this.props;

    return (
      <SuggestionList
        suggestionList={suggestionList}
      />
    );
  }

  componentDidMount() {
    const { getSuggestionList } = this.props;

    getSuggestionList();
  }
}

const mapStateToProps = state => ({
  suggestionList: state.suggestionList
});

const mapDispatchToProps = dispatch => ({
  getSuggestionList: () => {
    dispatch(getSuggestionList())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionListContainer);
