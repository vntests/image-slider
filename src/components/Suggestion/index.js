import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Suggestion extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }),
    date: PropTypes.shape({
      from: PropTypes.string,
      to:   PropTypes.string
    })
  };

  render() {
    const {
      title,
      image,
      date
    } = this.props;

    const dateFromSplitted = date.from.split('-');
    const dayFrom   = dateFromSplitted[2];
    const monthFrom = dateFromSplitted[1];
    const yearFrom  = dateFromSplitted[0];

    const dateToSplitted = date.to.split('-');
    const dayTo   = dateToSplitted[2];
    const monthTo = dateToSplitted[1];
    const yearTo  = dateToSplitted[0];

    const monthNames = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ];

    return (
      <div className="suggestion">
        <div className="suggestion-header">
          <h3 className="suggestion-heading">
            {title}
          </h3>
        </div>
        <div className="suggestion-figure" style={{ backgroundImage: `url(${image.src})` }}>

          <div className="suggestion-figure-caption">
            {`${dayFrom}. ${monthNames[monthFrom - 1]}. ${yearFrom}`} - {`${dayTo}. ${monthNames[monthTo - 1]}. ${yearTo}`}
          </div>
        </div>
      </div>
    );
  }
};
