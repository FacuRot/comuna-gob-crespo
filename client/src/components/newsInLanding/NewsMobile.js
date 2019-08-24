import React from "react";
import { Link } from "react-router-dom";

const NewsMobile = props => {
  const { news } = props;

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <img
        src={news[0].image.filename}
        alt="Noticia"
        style={{ width: "100%", height: "auto" }}
      />
      <h3 style={{ color: "white", marginLeft: "10px" }}>{news[0].title}</h3>
      <p style={{ color: "white", marginLeft: "10px" }}>
        {news[0].text.substr(0, 200)}...
      </p>
      <Link
        to={`/noticia/${news[0]._id}`}
        className="btn"
        style={{ marginLeft: "10px", marginTop: "15px" }}
      >
        Seguir Leyendo
      </Link>
    </div>
  );
};

export default NewsMobile;
