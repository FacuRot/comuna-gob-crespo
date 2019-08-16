import { GET_EVENTS } from "../actions/types";

const initialState = {
  eventsArray: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return { ...state, eventsArray: payload, loading: false };
    default:
      return state;
  }
}
