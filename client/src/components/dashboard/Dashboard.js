import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const Dashboard = ({ auth: { loading, user } }) => {
  return loading && user === null ? (
    <div className="container">
      <Spinner />
    </div>
  ) : (
    <div className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Bienvenido/a {user && user.name}
      </p>
      <p style={{ marginTop: "30px" }}>
        Estas son las acciones que puedes realizar:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Link
          to="/change-password"
          className="btn text-center"
          style={{ marginTop: "10px" }}
        >
          Cambiar mi Contraseña
        </Link>
        <Link
          to="/create-news/0"
          className="btn text-center"
          style={{ marginTop: "10px" }}
        >
          Redactar una Noticia
        </Link>
        <Link
          to="/create-events"
          className="btn text-center"
          style={{ marginTop: "10px" }}
        >
          Crear un Evento
        </Link>
        <Link
          to="/add-taller"
          className="btn text-center"
          style={{ marginTop: "10px" }}
        >
          Añadir un Taller
        </Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
