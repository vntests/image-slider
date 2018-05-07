import React, { Component } from 'react';

import './index.css';

export default class Container extends Component {
  render() {
    return (
      <div className="container" {...this.props}>
        {this.props.children}
      </div>
    );
  }
};
