import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Carousel extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.element),
    options: PropTypes.shape({
      itemsToShow:   PropTypes.number,
      itemsToScroll: PropTypes.number,
      nav: PropTypes.bool
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      options: null,

      translate: 0
    }

    this.onResize = this.onResize.bind(this);
  }

  render() {
    const { items } = this.props;

    const {
      itemsToShow,
      nav
    } = this.state.options;

    const itemWidth = Math.round((100 / itemsToShow) * 1000000) / 1000000;

    return (
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            transform: `translate(${this.state.translate}%, 0)`
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                flex: `0 0 ${itemWidth}%`,
                maxWidth: `${itemWidth}%`
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {nav && (
          <div className="carousel-nav">
            <button
              className="carousel-nav-button carousel-nav-button-prev"
              disabled={this.state.translate === 0}
              onClick={() => { this.prev() }}
            ></button>
            <button
              className="carousel-nav-button carousel-nav-button-next"
              disabled={this.state.translate === -(itemWidth * items.length) + itemWidth * itemsToShow}
              onClick={() => { this.next() }}
            ></button>
          </div>
        )}
      </div>
    );
  }

  componentWillMount() {
    this.init();

    window.addEventListener('resize', () => { this.onResize() })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => { this.onResize() })
  }

  prev() {
    const {
      itemsToShow,
      itemsToScroll
    } = this.state.options;

    const itemWidth = Math.round((100 / itemsToShow) * 1000000) / 1000000;

    this.setState(prevState => {
      return {
        translate: Math.round((prevState.translate + itemWidth * itemsToScroll) * 1000000) / 1000000
      }
    });
  }

  next() {
    const {
      itemsToShow,
      itemsToScroll
    } = this.state.options;

    const itemWidth = Math.round((100 / itemsToShow) * 1000000) / 1000000;

    this.setState(prevState => {
      return {
        translate: Math.round((prevState.translate - itemWidth * itemsToScroll) * 1000000) / 1000000
      }
    });
  }

  init() {
    if (window.innerWidth < 768) {
      this.setState({
        options: {
          ...this.props.options,
          ...this.props.options.responsive['767'].options
        },
        translate: 0
      })
    } else {
      this.setState({
        options: this.props.options,
        translate: 0
      })
    }
  }

  onResize() {
    this.init();
  }
};
