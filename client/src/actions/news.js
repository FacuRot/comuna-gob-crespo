import axios from "axios";
import { setAlert } from "./alert";
import { GET_NEWS, GET_NEW } from "./types";

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

// Get the list of news
export const getNews = () => async dispatch => {
  try {
    const res = await axios.get("api/posts");

    dispatch({
      type: GET_NEWS,
      payload: res.data
    });

    dispatch({
      type: GET_NEW,
      payload: {}
    });
  } catch (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
  }
};

// Get new by Id
export const getNewById = newId => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${newId}`);

    dispatch({
      type: GET_NEW,
      payload: res.data
    });
  } catch (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
  }
};
