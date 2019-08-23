import React from "react";

const Links = () => {
  return (
    <div className="links">
      <h3 style={{ color: "black" }}>Links de Interes</h3>
      <a
        href="http://www.afip.gob.ar/sitio/externos/default.asp"
        target="blank"
        className="btn-info"
        style={{ backgroundColor: "#3e9edc", marginBottom: "5px" }}
      >
        AFIP
      </a>
      <a
        href="https://www.anses.gob.ar/"
        target="blank"
        className="btn-info"
        style={{ backgroundColor: "#0080c7", marginBottom: "5px" }}
      >
        ANSES
      </a>
      <a
        href="http://gcrespo.boletaweb.com.ar/login/"
        target="blank"
        className="btn-info"
        style={{ backgroundColor: "#0062ae", marginBottom: "5px" }}
      >
        LIQUIDACIONES
      </a>
      <a
        href="http://gcrespo.boletaweb.com.ar/login/"
        target="blank"
        className="btn-info"
        style={{ backgroundColor: "#024B99", marginBottom: "5px" }}
      >
        VIALIDAD
      </a>
    </div>
  );
};

export default Links;
