import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";

const LicenciaConducir = () => (
  <div>
    <div className="banner banner-blue">
      <section
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "1.5rem",
          color: "white"
        }}
      >
        <h1
          style={{
            fontSize: "40px"
          }}
        >
          Licencia de Conducir
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div style={{ width: "800px", margin: "15px", marginBottom: "3rem" }}>
        <h3 style={{ marginLeft: "5px" }}>Requisitos</h3>
        <p style={{ marginLeft: "5px" }}>
          Concurrir al Juzgado de Faltas: Días Marte y Jueves
        </p>
        <p style={{ marginLeft: "5px" }}>Fotocopias de:</p>
        <ul>
          <li style={{ marginLeft: "5px" }}>Tarjeta verde de un automovil</li>
          <li style={{ marginLeft: "5px" }}>Seguro</li>
          <li style={{ marginLeft: "5px" }}>Patente</li>
          <li style={{ marginLeft: "5px" }}>
            DNI: 1° y 2° hoja y cambio de domicilio
          </li>
        </ul>
        <p style={{ marginLeft: "5px" }}>
          Si va a sacar su licencia por primera vez concurrir con fotocopia de
          grupo sanguineo
        </p>
        <p style={{ marginLeft: "5px" }}>$35 de sellado comunal</p>

        <p style={{ marginLeft: "5px", marginTop: "1rem" }}>
          <strong>Queres saber más? Contactate con nosotros.</strong>
        </p>
        <Link to="/contacto" className="btn btn-light">
          Contacto
        </Link>
      </div>
      <div>
        <LinksVial />
      </div>
    </div>
  </div>
);

export default LicenciaConducir;
