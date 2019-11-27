import React from "react";
import { Link } from "react-router-dom";

const LinksVial = () => {
  return (
    <div className="links">
      <h3 style={{ color: "black" }}>Trámites</h3>
      <Link
        to="/licencia-conducir"
        className="btn-info"
        style={{ backgroundColor: "#f0953c", marginBottom: "5px" }}
      >
        Licencia de Conducir
      </Link>
      <Link
        to="/solicitud-alta"
        className="btn-info"
        style={{ backgroundColor: "#f5ad3e", marginBottom: "5px" }}
      >
        Solicitud de Libre Deuda
      </Link>
      <Link
        to="/tasa-rural"
        className="btn-info"
        style={{ backgroundColor: "#fac640", marginBottom: "5px" }}
      >
        DREI
      </Link>
      <a
        href="http://gcrespo.boletaweb.com.ar/login"
        target="blank"
        className="btn-info"
        style={{ backgroundColor: "#fcd570", marginBottom: "5px" }}
      >
        Liquidaciones
      </a>
      <Link to="/aranceles" className="btn-info">
        Aranceles
      </Link>
    </div>
  );
};

export default LinksVial;
