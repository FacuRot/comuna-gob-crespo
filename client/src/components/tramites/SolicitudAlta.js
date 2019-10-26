import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";

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
          Derecho de Registro e Inspección
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div style={{ width: "90%", margin: "15px", marginBottom: "3rem" }}>
        <h3 style={{ marginLeft: "5px" }}>Formularios</h3>
        <ol style={{ marginLeft: "5px" }}>
          <li style={{ marginLeft: "15px" }}>Solicitud de alta</li>
          <li style={{ marginLeft: "15px" }}>
            Certificado de cese de actividad
          </li>
          <li style={{ marginLeft: "15px" }}>Certificado de baja</li>
        </ol>

        <h3 style={{ marginLeft: "5px", marginTop: "1rem" }}>
          Datos Requeridos para la Solicitud de Alta
        </h3>
        <p style={{ marginLeft: "5px" }}>
          Titular, Nombre de Fatnasia, Forma Jurídica, CUIT, Fecha inicio de
          actividades, Domicilio real y comercial, Actividad principal y
          secundaria, N° de DNI del titular
        </p>

        <h3 style={{ marginLeft: "5px", marginTop: "1rem" }}>
          Requisitos para cada Actividad
        </h3>
        <ul style={{ marginLeft: "5px" }}>
          <li>Comercios en General(kiosko, almacenes, tiendas, etc.)</li>
          <li>DNI del Titular</li>
          <li>Inscripción en API o AFIP</li>
          <li>Contrato de Locación</li>
        </ul>
        <p style={{ marginLeft: "5px" }}>
          Todo en fotocopias debidamente certificadas ante la autoridad policial
        </p>

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

export default SolicitudAlta;
