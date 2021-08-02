import axios from "axios";
import { setAlert } from "./alert";

export const viviendaLotePropio = (data) => async (dispatch) => {
  try {
    const body = data;
    await axios.post("/api/vivienda/solicitud", body);
    dispatch(setAlert("Registro Exitoso. Ya estas inspcripto!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const ninoArbol = (data) => async (dispatch) => {
  try {
    const body = data;
    await axios.post("/api/ninoarbol", body);
    dispatch(setAlert("¡Tu solicitud fue registrada con exito!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
