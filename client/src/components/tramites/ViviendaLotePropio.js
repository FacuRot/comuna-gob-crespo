import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Links from "../links/Links";
import { viviendaLotePropio } from "../../actions/solicitudes";
import Alert from "../layout/Alert";

const ViviendaLotePropio = ({ viviendaLotePropio }) => {
  const [formData, setFormData] = useState({
    name: "",
    dniSolicitante: "",
    tramiteSolicitante: "",
    tomoTerreno: "",
    folioTerreno: "",
    numeroTerreno: "",
    ingresos: "",
    grupoFamiliar: [],
  });

  const [miembrosData, setMiembrosData] = useState({
    nameMiembro: "",
    dniMiembro: "",
  });

  const {
    name,
    dniSolicitante,
    tramiteSolicitante,
    tomoTerreno,
    folioTerreno,
    numeroTerreno,
    ingresos,
    grupoFamiliar,
  } = formData;

  const { nameMiembro, dniMiembro } = miembrosData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeMiembros = (e) => {
    setMiembrosData({
      ...miembrosData,
      [e.target.name]: e.target.value,
    });
  };

  const añadirMiembro = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      grupoFamiliar: [
        ...grupoFamiliar,
        { nombre: nameMiembro, dni: dniMiembro },
      ],
    });
    setMiembrosData({
      nameMiembro: "",
      dniMiembro: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const bodyData = {
      name: name,
      dni: dniSolicitante,
      tramite: tramiteSolicitante,
      tomo: tomoTerreno,
      folio: folioTerreno,
      numero: numeroTerreno,
      ingresos: ingresos,
      grupoFamiliar: grupoFamiliar,
    };

    viviendaLotePropio(bodyData);

    setFormData({
      name: "",
      dniSolicitante: "",
      tramiteSolicitante: "",
      tomoTerreno: "",
      folioTerreno: "",
      numeroTerreno: "",
      ingresos: "",
      grupoFamiliar: [],
    });
  };

  return (
    <div>
      <div className="banner" style={{ height: "25vh" }}>
        <section
          style={{
            maxWidth: "75%",
            margin: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          >
            Inscripción a vivienda en lote propio
          </h1>
        </section>
      </div>
      <div className="news-container">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h3>Del Solicitante</h3>
          <div className="form-group">
            <h4>Nombre</h4>
            <input
              type="text"
              name="name"
              placeholder="Juan Rodríguez"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>DNI</h4>
            <input
              type="text"
              name="dniSolicitante"
              placeholder="32731123"
              value={dniSolicitante}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Nro. Tramite</h4>
            <small>
              Nro. de 11 dígitos que se encuentra debajo de la fecha de
              vencimiento del dni
            </small>
            <input
              type="text"
              name="tramiteSolicitante"
              placeholder="00112233445"
              value={tramiteSolicitante}
              onChange={(e) => onChange(e)}
            />
          </div>
          <h3>Escritura del terreno</h3>
          <div className="form-group">
            <h4>Tomo</h4>
            <input
              type="text"
              name="tomoTerreno"
              placeholder="1000"
              value={tomoTerreno}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Folio</h4>
            <input
              type="text"
              name="folioTerreno"
              placeholder="1000"
              value={folioTerreno}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Número</h4>
            <input
              type="text"
              name="numeroTerreno"
              placeholder="10000"
              value={numeroTerreno}
              onChange={(e) => onChange(e)}
            />
          </div>
          <h3>Ingresos del grupo familiar</h3>
          <div className="form-group">
            <h4>Ingresos</h4>
            <small>Equivalente a dos salarios mínimos o más ($45000)</small>
            <input
              type="text"
              name="ingresos"
              placeholder="45000"
              value={ingresos}
              onChange={(e) => onChange(e)}
            />
          </div>
          <h3>Grupo familiar</h3>
          <h4>Miembros</h4>
          {grupoFamiliar.map((miembro) => (
            <div>
              <p>{`Nombre: ${miembro.nombre}`}</p>
              <p>{`DNI: ${miembro.dni}`}</p>
            </div>
          ))}
          <div className="form-group">
            <h4>Nombre</h4>
            <input
              type="text"
              name="nameMiembro"
              placeholder="Daniel Rodríguez"
              value={nameMiembro}
              onChange={(e) => onChangeMiembros(e)}
            />
            <h4>DNI</h4>
            <input
              type="text"
              name="dniMiembro"
              placeholder="40303491"
              value={dniMiembro}
              onChange={(e) => onChangeMiembros(e)}
            />
            <button onClick={(e) => añadirMiembro(e)}>Añadir miembro</button>
          </div>
          <Alert />
          <input type="submit" value="Enviar" className="btn my-1" />
        </form>
        <Links />
      </div>
    </div>
  );
};

ViviendaLotePropio.propTypes = {
  viviendaLotePropio: PropTypes.func.isRequired,
};

export default connect(null, { viviendaLotePropio })(ViviendaLotePropio);
