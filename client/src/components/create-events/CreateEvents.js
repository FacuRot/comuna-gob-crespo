import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEvent } from "../../actions/events";
import { Link } from "react-router-dom";
import Agenda from "./agenda.png";
import Alert from "../layout/Alert";

const CreateEvents = ({ createEvent, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    date: ""
  });

  const { title, text, date } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const eventData = {
      title: title,
      text: text,
      date: date
    };

    createEvent(eventData, history);
  };
  return (
    <div className="container">
      <Alert />
      <h1 className="large text-primary">Crea un Evento</h1>
      <p className="lead" style={{ color: "white" }}>
        <img
          src={Agenda}
          alt="Agenda"
          style={{
            color: "white",
            width: "30px",
            height: "30px",
            marginRight: "5px"
          }}
        />
        Completa los campos para poder publicar un nuevo evento
      </p>
      <small style={{ color: "white" }}>* = campos requeridos</small>
      <form className="form" onSubmit={e => onSubmit(e)} method="POST">
        <div className="form-group">
          <input
            type="text"
            placeholder="*Titulo"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
          <small className="form-text" style={{ color: "white" }}>
            Un texto corto que sirva de titulo para el evento
          </small>
        </div>

        <div className="form-group">
          <textarea
            placeholder="*Descripcion del evento"
            name="text"
            value={text}
            onChange={e => onChange(e)}
          />
          <small className="form-text" style={{ color: "white" }}>
            De una descripcion breve del evento
          </small>
        </div>

        <div className="form-group">
          <input
            type="date"
            placeholder="*Fecha del evento"
            name="date"
            value={date}
            onChange={e => onChange(e)}
          />
          <small className="form-text" style={{ color: "white" }}>
            Fecha del evento
          </small>
        </div>

        <input type="submit" value="Submit" className="btn my-1" />
        <Link className="btn my-1" to="/dashboard">
          Volver
        </Link>
      </form>
    </div>
  );
};

CreateEvents.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { createEvent }
)(CreateEvents);
