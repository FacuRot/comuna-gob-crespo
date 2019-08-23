import React from "react";
import { Link } from "react-router-dom";
import Links from "../links/Links";

const NewsItemDesktop = props => {
  const { newsArray } = props;

  return (
    <div className="news-container">
      <div>
        {newsArray.map(item => (
          <div key={item._id} className="news-item">
            <img src={item.image.filename} alt="Noticia" className="news-img" />
            <section style={{ width: "300px" }}>
              <p className="small" style={{ color: "grey" }}>
                {new Date(item.date).getUTCDate()}/
                {new Date(item.date).getUTCMonth()}/
                {new Date(item.date).getFullYear()}
              </p>
              <h3>{item.title}</h3>
              <p style={{ color: "grey" }}>{item.text.substr(0, 200)}...</p>
              <Link
                to={`/new/${item._id}`}
                className="btn"
                style={{ marginTop: "30px" }}
              >
                Seguir Leyendo
              </Link>
            </section>
            <hr style={{ color: "black" }} />
          </div>
        ))}
      </div>
      <Links />
    </div>
  );
};

export default NewsItemDesktop;
