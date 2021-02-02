import axios from "axios";
import { setAlert } from "./alert";

export const sendEmail = (emailData, history) => async (dispatch) => {
  try {
    const res = await axios.post("api/email/contact", emailData);
    history.push("/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const sendEmailTaller = (emailData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/email/taller", emailData);

    dispatch(setAlert("Inscripción exitosa!", "success"));
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    return false;
  }
};
