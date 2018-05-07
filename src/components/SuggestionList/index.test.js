import React from 'react';
import ReactDOM from 'react-dom';

import SuggestionList from './';

it('renders without crashing', () => {
  const suggestionList = [];
  
  const div = document.createElement('div');
  ReactDOM.render(
    <SuggestionList
      suggestionList={suggestionList}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
