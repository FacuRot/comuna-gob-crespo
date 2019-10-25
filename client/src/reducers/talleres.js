import { GET_TALLERES, GET_TALLER_ITEM } from "../actions/types";

const initialState = {
  talleres: [],
  tallerItem: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TALLERES:
      return { ...state, talleres: payload, loading: false };
    case GET_TALLER_ITEM:
      return { ...state, tallerItem: payload, loading: false };
    default:
      return state;
  }
}
