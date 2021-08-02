import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Links from "../links/Links";
import { ninoArbol } from "../../actions/solicitudes";
import Alert from "../layout/Alert";

export const NinoArbol = ({ ninoArbol }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNac: "",
    address: "",
    tel: "",
    padre1: "",
    padre2: "",
  });

  const { nombre, fechaNac, address, tel, padre1, padre2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await ninoArbol(formData);
    setFormData({
      nombre: "",
      fechaNac: "",
      address: "",
      tel: "",
      padre1: "",
      padre2: "",
    });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
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
            Proyecto un niño, un árbol
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div>
          <h3>
            Completá el formulario para inscribirte en el proyecto "Un niño, un
            árbol" (nacidos en 2019 y 2020)
          </h3>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <h4>Nombre y apellido del niño/a</h4>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => onChange(e)}
                placeholder="Daniel Rodriguez"
              />
            </div>
            <div className="form-group">
              <h4>fecha de nacimiento</h4>
              <input
                type="date"
                name="fechaNac"
                value={fechaNac}
                onChange={(e) => onChange(e)}
                placeholder="10/03/2020"
              />
            </div>
            <div className="form-group">
              <h4>dirección de la vivienda</h4>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
                placeholder="Combate de San Lorenzo 220"
              />
            </div>
            <div className="form-group">
              <h4>telefono de contacto</h4>
              <input
                type="text"
                name="tel"
                value={tel}
                onChange={(e) => onChange(e)}
                placeholder="3498407896"
              />
            </div>
            <div className="form-group">
              <h3>Datos de los padres (al menos uno)</h3>
              <h4>nombre del padre/madre</h4>
              <input
                type="text"
                name="padre1"
                value={padre1}
                onChange={(e) => onChange(e)}
                placeholder="Daniel/a Rodriguez"
              />
            </div>
            <div className="form-group">
              <h4>nombre del padre/madre</h4>
              <small>
                en caso de completar los datos de uno solo de los padres dejar
                este campo vacío
              </small>
              <input
                type="text"
                name="padre2"
                value={padre2}
                onChange={(e) => onChange(e)}
                placeholder="Daniel/a Rodriguez"
              />
            </div>
            <Alert />
            <input type="submit" value="Enviar" className="btn my-1" />
          </form>
        </div>
        <Links />
      </div>
    </div>
  );
};

NinoArbol.propTypes = {
  ninoArbol: PropTypes.func.isRequired,
};

export default connect(null, { ninoArbol })(NinoArbol);
