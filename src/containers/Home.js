import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import SuggestionSection from '../components/SuggestionSection';
import SuggestionFilter from './SuggestionFilter';
import SuggestionList from './SuggestionList';

import Home from '../components/Home';

class HomeContainer extends Component {
  render() {
    const { t } = this.props;

    return (
      <Home
        suggestionSection={
          <SuggestionSection
            heading={t('home.suggestionSection.heading')}
            suggestionFilter={
              <SuggestionFilter />
            }
            suggestionList={
              <SuggestionList />
            }
          />
        }
      />
    );
  }
}

export default connect()(translate('translations')(HomeContainer));
