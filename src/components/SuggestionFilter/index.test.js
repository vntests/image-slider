import React from 'react';
import ReactDOM from 'react-dom';

import SuggestionFilter from './';

it('renders without crashing', () => {
  const getSuggestionList = jest.fn();
  const clearSuggestionList = jest.fn();

  const div = document.createElement('div');
  ReactDOM.render(
    <SuggestionFilter
      getSuggestionList={getSuggestionList}
      clearSuggestionList={clearSuggestionList}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
