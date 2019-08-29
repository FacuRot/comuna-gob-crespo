import axios from "axios";
import { setAlert } from "./alert";

export const sendEmail = (emailData, history) => async dispatch => {
  try {
    const res = await axios.post("api/email", emailData);
    history.push("/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
