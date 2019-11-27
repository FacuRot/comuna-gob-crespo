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
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize: "40px"
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
            <li>Tramite Urgente $1000</li>
            <li>Certificado de Obra $1000</li>
            <li>Tramite Administrativo $400</li>
            <li>Visación Plano $400</li>
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
