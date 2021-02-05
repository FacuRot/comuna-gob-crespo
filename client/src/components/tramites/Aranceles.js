import React from "react";
import LinksVial from "../links/LinksVial";

const Aranceles = () => {
  return (
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
          <h1
            style={{
              fontSize: "40px",
            }}
          >
            Aranceles
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div id="licenciaConducirDiv">
          <h2>Aranceles</h2>
          <ul>
            <li>Tramite Urgente $1350</li>
            <li>Certificado de Obra $1350</li>
            <li>Tramite Administrativo $500</li>
            <li>Visación Plano $500</li>
          </ul>
        </div>
        <div>
          <LinksVial />
        </div>
      </div>
    </div>
  );
};

export default Aranceles;
