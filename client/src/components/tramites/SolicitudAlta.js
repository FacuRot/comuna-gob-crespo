import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";
import pdfLibreDeuda from "../../contenido descargable/Talonario solicitud libre deuda.pdf";

const SolicitudAlta = () => (
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
          Solicitud de Libre Deuda
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div id="licenciaConducirDiv">
        <h3>Solicitud de Libre Deuda</h3>
        <p>Talonario de solicitud de libre deuda:</p>
        <a
          href={pdfLibreDeuda}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
          style={{ marginBottom: "2rem" }}
        >
          Descargar
        </a>

        <p>
          <strong>Queres saber más? Contactate con nosotros</strong>
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

export default SolicitudAlta;
