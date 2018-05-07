import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from '../Common/Carousel';

import Suggestion from '../Suggestion';

import './index.css';

export default class SuggestionList extends Component {
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
    }))
  };

  render() {
    const { suggestionList } = this.props;

    const carouselItems = suggestionList && suggestionList.map((suggestion, index) => (
      <Suggestion
        title={suggestion.title}
        image={{
          src: suggestion.image.src,
          alt: suggestion.image.alt
        }}
        date={{
          from: suggestion.date.from,
          to:   suggestion.date.to
        }}
      />
    ))

    return (
      <div className="suggestion-list">
        <Carousel
          items={carouselItems}
          options={{
            itemsToShow:   3,
            itemsToScroll: 1,
            nav: true,

            responsive: {
              '767': {
                options: {
                  itemsToShow: 1
                }
              }
            }
          }}
        />
      </div>
    );
  }
};
