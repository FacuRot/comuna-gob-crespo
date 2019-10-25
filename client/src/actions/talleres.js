import axios from "axios";
import { setAlert } from "./alert";
import { GET_TALLERES, GET_TALLER_ITEM } from "./types";

// Añadir Taller o Actividad
export const addTaller = (tallerData, history) => async dispatch => {
  // build form data
  const form = Object.keys(tallerData).reduce((f, k) => {
    f.append(k, tallerData[k]);
    return f;
  }, new FormData());

  try {
    await axios.post("/api/talleres", form);

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

// Obtener Talleres y Actividades
export const getTalleres = () => async dispatch => {
  try {
    const res = await axios.get("/api/talleres");

    dispatch({
      type: GET_TALLERES,
      payload: res.data
    });
  } catch (error) {
    throw error;
  }
};

// Obtener taller por id
export const getTallerById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/talleres/${id}`);

    dispatch({
      type: GET_TALLER_ITEM,
      payload: res.data
    });
  } catch (error) {
    throw error;
  }
};
