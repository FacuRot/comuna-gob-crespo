import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";
import pdfRegistroInspeccion from "../../contenido descargable/SOLICITUD DE INSCRIPCION REG E INSPSC..pdf";

const TasaRural = () => (
  <div>
    <div className="banner banner-blue">
      <section
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "5rem",
          color: "white"
        }}
      >
        <h1
          style={{
            fontSize: "40px"
          }}
        >
          Derecho de Registro e Inspección
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div id="licenciaConducirDiv">
        <h3>Solicitud de Inscripción Registro e Inspección</h3>
        <p>Descargar formulario:</p>
        <a
          href={pdfRegistroInspeccion}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          Descargar
        </a>

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

export default TasaRural;
