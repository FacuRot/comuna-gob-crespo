import React from "react";
import { Link } from "react-router-dom";
import LinksVial from "../links/LinksVial";
import segVial from "../../img/IMG_5687.jpg";

const Vial = () => (
  <div>
    <div className="banner banner-vial">
      <section
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        <h1
          style={{
            fontSize: "2rem"
          }}
        >
          YO ME SUMO POR LA <br /> SEGURIDAD VIAL
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div className="tallerItem">
        <img src={segVial} alt="Seguridad Vial" style={{ height: "auto" }} />

        <p style={{ marginLeft: "5px" }}>
          "YO ME SUMO POR LA SEGURIDAD VIAL DE GOBERNADOR CRESPO" es un proyecto
          presentado a la comuna local por los señores Oscar Enrique Ceschi y
          Daniel Rotela y muy bien recibido por el Dr. Lemaire y su Comisión
          Comunal la cual se hace eco de la carencia de EDUCACIÓN VIAL y del
          problema de la SEGURIDAD VIAL. Somos conscientes que sin una
          organización por parte del estado y sin la moderación de las conductas
          humanas no es posible lograr un óptimo resultado. Las normas
          reguladoras de tránsito y la responsabilidad de los usuarios de la vía
          pública componen el principal punto en la seguridad vial. Todos somos
          usuarios de la via pública, ya se cuando asumimos el rol del peatón,
          pasajeros, conductores de todo tipo de vehiculos (autos, motos,
          bicicletas, patines, etc.) y, en cada caso, debe hacer frente a
          complejas interacciones sociales que articulan su comportamiento.
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

export default Vial;
