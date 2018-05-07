import { GET_SUGGESTION_LIST, CLEAR_SUGGESTION_LIST } from '../constants/suggestion';

const initialState = [];

export const suggestionList = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUGGESTION_LIST:
      return [
        ...state,
        ...action.suggestionList
      ];
    case CLEAR_SUGGESTION_LIST:
      return initialState;
    default:
      return state;
  }
};
