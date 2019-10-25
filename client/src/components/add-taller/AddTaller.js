import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";
import { addTaller } from "../../actions/talleres";
import placeholder from "../create-news/placeholder.png";
import { Link } from "react-router-dom";

const AddTaller = ({ addTaller, history }) => {
  const [formData, setFormData] = useState({
    avatar: {
      preview: placeholder,
      raw: ""
    },
    name: "",
    description: "",
    instructor: ""
  });

  const { avatar, name, description, instructor } = formData;

  const onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        avatar: {
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        }
      });
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const tallerData = {
      tallerImage: avatar.raw,
      name,
      description,
      instructor
    };

    addTaller(tallerData, history);
  };

  return (
    <div className="container">
      <Alert />
      <h1 className="large text-primary">Añade un taller</h1>
      <p className="lead">
        Completa los campos para poder añadir un taller o actividad nuevo/a
      </p>
      <small>* = campos requeridos</small>
      <div className="text-center">
        <img
          src={avatar.preview}
          alt="Taller"
          style={{
            height: "150px",
            width: "150px"
          }}
          className="mx-auto d-block mb-3"
        />
      </div>
      <small
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        Preview de la imagen
      </small>
      <form className="form" onSubmit={e => onSubmit(e)} method="POST">
        <div className="form-group">
          <label
            htmlFor="upload-button"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {<span className="btn btn-light">Elegir foto</span>}
          </label>
          <input
            type="file"
            id="upload-button"
            accept="image/*"
            style={{ display: "none" }}
            onChange={e => onImageChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="*Titulo"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Un texto corto que sirva de titulo para el taller o actividad
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descripcion del taller/actividad"
            name="description"
            value={description}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            De una descripcion breve del taller o actividad
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Instructor"
            name="instructor"
            value={instructor}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Nombre del instructor del taller</small>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary my-1" />
        <Link className="btn my-1" to="/dashboard">
          Volver
        </Link>
      </form>
    </div>
  );
};

AddTaller.propTypes = {
  addTaller: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTaller }
)(AddTaller);
