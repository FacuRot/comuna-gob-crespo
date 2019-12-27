import axios from "axios";
import { setAlert } from "./alert";
import { GET_EVENTS } from "./types";

export const createEvent = (eventData, history) => async dispatch => {
  try {
    const res = await axios.post("api/events", eventData);
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get("api/events");

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (errors) {
    //errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    throw errors;
  }
};

export const eraseEvent = id => async dispatch => {
  try {
    if (
      window.confirm(
        "Quieres continuar? una vez borrado este evento no se puede recuperar"
      )
    ) {
      await axios.post(`api/events/${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
