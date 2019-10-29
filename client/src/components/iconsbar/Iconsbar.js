import React from "react";
import { Link } from "react-router-dom";

import Cultura from "../../img/iconos/cultura.png";
import SeguridadVial from "../../img/iconos/seguridad vial2.png";
import Actividades from "../../img/iconos/actividades.png";
import Convocatorias from "../../img/iconos/convocatorias2.png";

const Iconsbar = () => {
  return (
    <nav className="iconsbar">
      <Link to="/comuna" style={{ color: "#333" }}>
        <section>
          <img src={Cultura} alt="Cultura" className="icon" />
          <p>
            <strong>COMUNA</strong>
          </p>
        </section>
      </Link>
      <Link to="/talleres" style={{ color: "#333" }}>
        <section>
          <img src={Actividades} alt="Actividades" className="icon" />
          <p>
            <strong>TALLERES Y ACTIVIDADES</strong>
          </p>
        </section>
      </Link>
      <Link to="seguridad-vial" style={{ color: "#333" }}>
        <section>
          <img src={SeguridadVial} alt="Seguridad Vial" className="icon" />
          <p>
            <strong>SEGURIDAD VIAL</strong>
          </p>
        </section>
      </Link>
      <section>
        <img src={Convocatorias} alt="Convocatorias" className="icon" />
        <p>
          <strong>CONVOCATORIAS</strong>
        </p>
      </section>
    </nav>
  );
};

export default Iconsbar;
