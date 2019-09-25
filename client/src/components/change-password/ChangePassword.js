import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changePassword } from "../../actions/auth";
import Alert from "../layout/Alert";

const ChangePassword = ({ changePassword, history }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword1: "",
    newPassword2: ""
  });

  const { oldPassword, newPassword1, newPassword2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      oldPassword,
      newPassword1,
      newPassword2
    };

    changePassword(formData, history);
  };

  return (
    <div className="container">
      <Alert />
      <h1 className="large text-primary">Cambiar Contraseña</h1>
      <p className="lead">Completa los campos para cambiar tu contraseña</p>
      <small>* = campos requeridos</small>
      <form className="form" onSubmit={e => onSubmit(e)} method="POST">
        <div className="form-group">
          <input
            type="password"
            placeholder="*Contraseña Actual"
            name="oldPassword"
            value={oldPassword}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Tu contraseña actual</small>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="*Nueva Contraseña"
            name="newPassword1"
            value={newPassword1}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Tu nueva contraseña</small>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="*Nueva Contraseña"
            name="newPassword2"
            value={newPassword2}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Repite tu nueva contraseña</small>
        </div>

        <input type="submit" value="Submit" className="btn my-1" />
        <Link className="btn my-1" to="/dashboard">
          Volver
        </Link>
      </form>
    </div>
  );
};

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired
};

export default connect(
  null,
  { changePassword }
)(ChangePassword);
