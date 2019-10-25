import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTallerById } from "../../actions/talleres";

const LinksTalleres = ({ getTallerById }) => {
  const redirect = id => {
    getTallerById(id);
  };

  return (
    <div className="links">
      <h3 style={{ color: "black" }}>Más Talleres y Actividades</h3>
      <span
        className="btn-info"
        style={{
          backgroundColor: "#e1052d",
          marginBottom: "5px"
        }}
        onClick={() => redirect("5db0702d06586928e4c279cf")}
      >
        Murga Pide Pista
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#e21437", marginBottom: "5px" }}
        onClick={() => redirect("5db0706006586928e4c279d0")}
      >
        Tango "Los Amigos Milongueros"
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#e42443", marginBottom: "5px" }}
        onClick={() => redirect("5db06f3106586928e4c279cd")}
      >
        Folklore "Surcos de Patria"
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#e5354e", marginBottom: "5px" }}
        onClick={() => redirect("5db0709906586928e4c279d1")}
      >
        Violín
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#ea5166", marginBottom: "5px" }}
        onClick={() => redirect("5db06eef06586928e4c279cc")}
      >
        Costura y Tejido
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#ef6174", marginBottom: "5px" }}
        onClick={() => redirect("5db06e7306586928e4c279cb")}
      >
        Coro
      </span>
      <span
        className="btn-info"
        style={{ backgroundColor: "#ff7289", marginBottom: "5px" }}
        onClick={() => redirect("5db06fd006586928e4c279ce")}
      >
        Futbol Femenino Infantil
      </span>
    </div>
  );
};

LinksTalleres.propTypes = {
  getTallerById: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTallerById }
)(LinksTalleres);
