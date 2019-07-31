import React from "react";

import Cultura from "../../img/iconos/cultura.png";
import Talleres from "../../img/iconos/talleres.png";
import Actividades from "../../img/iconos/actividades.png";
import Obras from "../../img/iconos/obras.png";
import Convocatorias from "../../img/iconos/convocatorias.png";

const Iconsbar = () => {
  return (
    <nav className="iconsbar">
      <section>
        <img src={Cultura} alt="Cultura" className="icon" />
        <p>
          <strong>CULTURA</strong>
        </p>
      </section>
      <section>
        <img src={Talleres} alt="Talleres" className="icon" />
        <p>
          <strong>TALLERES</strong>
        </p>
      </section>
      <section>
        <img src={Actividades} alt="Actividades" className="icon" />
        <p>
          <strong>ACTIVIDADES</strong>
        </p>
      </section>
      <section>
        <img src={Obras} alt="Obras" className="icon" />
        <p>
          <strong>OBRAS</strong>
        </p>
      </section>
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
