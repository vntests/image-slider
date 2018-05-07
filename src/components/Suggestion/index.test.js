import React from 'react';
import ReactDOM from 'react-dom';

import Suggestion from './';

it('renders without crashing', () => {
  const suggestion = {
    title: '',
    image: {
      src: '',
      alt: ''
    },
    date: {
      from: '',
      to: ''
    }
  };

  const div = document.createElement('div');
  ReactDOM.render(
    <Suggestion
      {...suggestion}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
