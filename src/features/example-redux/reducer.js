import { SHOW_TIME } from './constants';

const initialState = {
  value: 'not set',
};

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TIME:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
