import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";
import pdfRegistroInspeccion from "../../contenido descargable/SOLICITUD DE INSCRIPCION REG E INSPSC..pdf";
import pdfOrdenanza537 from "../../contenido descargable/Ordenanza 537-2021.pdf";
import pdfOrdenanza538 from "../../contenido descargable/ORDENANZA TRIBUTARIA 578-2022.pdf";

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
          color: "white",
        }}
      >
        <h1 id="derechoRegistroInspeccion">Derecho de Registro e Inspección</h1>
      </section>
    </div>
    <div className="news-container">
      <div id="licenciaConducirDiv">
        <h3>Ordenanza 538-2022</h3>
        <a
          href={pdfOrdenanza538}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
          style={{ marginBottom: "2rem" }}
        >
          Descargar
        </a>
        <h3>Ordenanza 537-2021</h3>
        <a
          href={pdfOrdenanza537}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
          style={{ marginBottom: "2rem" }}
        >
          Descargar
        </a>
        <h3>Solicitud de Alta</h3>
        <p>Descargar formulario:</p>
        <a
          href={pdfRegistroInspeccion}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
          style={{ marginBottom: "0.5rem" }}
        >
          Descargar
        </a>
        <p>
          <strong>Documentación a presentar:</strong>
        </p>
        <ul style={{ marginBottom: "2rem" }}>
          <li>Fotocopia de DNI</li>
          <li>Constancia de Inscripción en AFIP y API</li>
          <li>Formulario por duplicado</li>
        </ul>

        <h3>Solicitud de Baja</h3>
        <p>
          <strong>Documentación a presentar:</strong>
        </p>
        <ul style={{ marginBottom: "2rem" }}>
          <li>Nota solicitando la baja</li>
          <li>Constancia de baja en AFIP y API</li>
        </ul>

        <h3>Cambio de Datos</h3>
        <p>
          <strong>Documentación a presentar:</strong>
        </p>
        <ul style={{ marginBottom: "2rem" }}>
          <li>Nota solicitando el cambio de datos</li>
          <li>Comprobante de AFIP o API</li>
        </ul>

        <p>
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
