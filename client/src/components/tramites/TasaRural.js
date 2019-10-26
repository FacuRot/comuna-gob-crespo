import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";

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
          Tasa Rural
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div style={{ width: "90%", margin: "15px", marginBottom: "3rem" }}>
        <h3 style={{ marginLeft: "5px" }}>Zona Rural</h3>
        <p style={{ marginLeft: "5px" }}>
          2 cuotas: 1° vencimiento en el mes de junio, 2° vencimiento en el mes
          de noviembre
        </p>

        <h3 style={{ marginLeft: "5px", marginTop: "1rem" }}>
          Categoría Unica
        </h3>
        <p style={{ marginLeft: "5px" }}>
          El importe en pesos correspondiente a 1(un) litro de gas oil por
          hectárea y por año, actualizado al precio de la fecha a efectivizarse
          el pago de la tasa
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

export default TasaRural;
