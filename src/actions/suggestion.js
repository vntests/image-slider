import { SUGGESTION_LIST_API_URL, GET_SUGGESTION_LIST, CLEAR_SUGGESTION_LIST } from '../constants/suggestion';

export const getSuggestionList = (options) => dispatch => {
  const URL = options && (options.dateFrom || options.dateTo)
    ? `${SUGGESTION_LIST_API_URL}?dateFrom=${options.dateFrom}&dateTo=${options.dateTo}`
    : SUGGESTION_LIST_API_URL;

  return fetch(URL)
    .then(response => response.json())
    .then(suggestionList => {
      dispatch({
        type: GET_SUGGESTION_LIST,
        suggestionList
      })
    })
    .catch(err => { console.error(err) });
};

export const clearSuggestionList = () => ({
  type: CLEAR_SUGGESTION_LIST
});
