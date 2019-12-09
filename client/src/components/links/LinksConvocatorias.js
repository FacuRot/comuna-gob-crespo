import React from "react";
import { Link } from "react-router-dom";

const LinksConvocatorias = () => {
  return (
    <div className="links">
      <h3 style={{ color: "black" }}>Trámites</h3>
      <Link
        to="/convocatorias/residencia"
        className="btn-info"
        style={{ backgroundColor: "#4c316d", marginBottom: "5px" }}
      >
        Residencia Estudiantil
      </Link>
      <Link
        to="/convocatorias/beca"
        className="btn-info"
        style={{ backgroundColor: "#8f5e95", marginBottom: "5px" }}
      >
        Beca Estudiantil
      </Link>
    </div>
  );
};

export default LinksConvocatorias;
