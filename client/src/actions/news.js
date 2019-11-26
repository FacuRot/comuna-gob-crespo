import axios from "axios";
import { setAlert } from "./alert";
import { GET_NEWS, GET_NEW, GET_MORE_NEWS } from "./types";

// Create a new or update one
export const createNews = (id, newsData, history) => async dispatch => {
  // build form data
  const form = Object.keys(newsData).reduce((f, k) => {
    f.append(k, newsData[k]);
    return f;
  }, new FormData());

  try {
    const res = await axios.post(`/api/posts/${id}`, form);
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

// Get news for MoreNews component
export const getMoreNews = () => async dispatch => {
  try {
    const res = await axios.get("api/posts");

    dispatch({
      type: GET_MORE_NEWS,
      payload: res.data
    });
  } catch (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
  }
};

// Get pdf to download
export const getPdfLicenciaConducir = () => async dispatch => {
  try {
    const res = await axios("/api/posts/pdf/licencia-conducir", {
      method: "GET",
      responseType: "blob"
    });

    // Create a Blob from pdf stream
    const file = new Blob([res.data], {
      type: "application/pdf"
    });

    // Build an url from the file
    const fileURL = URL.createObjectURL(file);

    // Open url on new window
    window.open(fileURL);
  } catch (error) {
    console.log(error.msg);
  }
};
