import React from 'react';
import ReactDOM from 'react-dom';

import SuggestionSection from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuggestionSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
