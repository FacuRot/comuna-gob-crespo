import { GET_NEWS } from "../actions/types";

const initialState = {
  newsArray: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return { ...state, newsArray: payload, loading: false };
    default:
      return state;
  }
}
