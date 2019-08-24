import { GET_NEWS, GET_NEW, GET_MORE_NEWS } from "../actions/types";

const initialState = {
  newsArray: [],
  newItem: null,
  moreNews: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return { ...state, newsArray: payload, loading: false };
    case GET_NEW:
      return {
        ...state,
        newItem: payload,
        loading: false
      };
    case GET_MORE_NEWS:
      return {
        ...state,
        moreNews: payload,
        loading: false
      }
    default:
      return state;
  }
}
