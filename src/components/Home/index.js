import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../Common/Container';

import './index.css';

export default class Home extends Component {
  static propTypes = {
    suggestionSection: PropTypes.element
  };

  render() {
    const { suggestionSection } = this.props;

    return (
      <div className="home">
        <Container>
          {suggestionSection}
        </Container>
      </div>
    );
  }
};
