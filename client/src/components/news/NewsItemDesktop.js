import React from "react";
import { Link } from "react-router-dom";
import Links from "../links/Links";

const NewsItemDesktop = props => {
  const { newsArray } = props;

  return (
    <div className="news-container">
      <div style={{ flexGrow: "2", margin: "10px" }}>
        {newsArray.length === 0 ? (
          <h2>No hay Noticias</h2>
        ) : (
          newsArray.map(item => (
            <div key={item._id} className="news-item">
              <img
                src={item.image.filename}
                alt="Noticia"
                className="news-img"
              />
              <section style={{ width: "300px" }}>
                <p className="small" style={{ color: "grey" }}>
                  {new Date(item.date).getUTCDate()}/
                  {new Date(item.date).getUTCMonth()+1}/
                  {new Date(item.date).getFullYear()}
                </p>
                <h3>{item.title}</h3>
                <p style={{ color: "black" }}>{item.text.substr(0, 150)}...</p>
                <Link
                  to={`/noticia/${item._id}`}
                  className="btn"
                  style={{ marginTop: "30px" }}
                >
                  Seguir Leyendo
                </Link>
              </section>
              <hr style={{ display: "block", borderStyle: "inset", borderWidth: "1px", color: "black" }} />
            </div>
          ))
        )}
      </div>
      <Links />
    </div>
  );
};

export default NewsItemDesktop;
