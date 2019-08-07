import axios from "axios";
import { setAlert } from "./alert";

// Create a new
export const createNews = (newsData, history) => async dispatch => {
  // build form data
  const form = Object.keys(newsData).reduce((f, k) => {
    f.append(k, newsData[k]);
    return f;
  }, new FormData());

  try {
    const res = await axios.post("api/posts", form);
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
