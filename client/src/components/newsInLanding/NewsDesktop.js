import React from "react";
import { Link } from "react-router-dom";
import NewsIcono from "./masNoticias.jpg";

const NewsDesktop = props => {
  const { news } = props;
  const date = new Date(news[0].date);

  return (
    <div>
      <section
        style={{ display: "flex", marginTop: "10px", marginBottom: "10px" }}
      >
        <section
          style={{ flex: "50%", display: "flex", justifyContent: "center" }}
        >
          <img
            src={news[0].image.filename}
            alt="Noticia"
            style={{ height: "350px", width: "600px" }}
          />
        </section>

        <section
          style={{
            flex: "50%",
            marginLeft: "10px",
            paddingLeft: "20px",
            paddingTop: "20px"
          }}
        >
          <p>
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </p>
          <h3>{news[0].title}</h3>
          <p>{news[0].text.substr(0, 150)}...</p>
          <Link
            to={`/noticia/${news[0]._id}`}
            className="btn"
            style={{ marginTop: "30px" }}
          >
            Seguir Leyendo
          </Link>
        </section>
      </section>
      <section style={{ display: "flex" }}>
        {news.slice(1, 5).map((item, i) => (
          <Link
            key={item._id}
            to={`/noticia/${item._id}`}
            style={{
              width: "270px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              marginRight: "5px"
            }}
          >
            <img
              src={item.image.filename}
              alt="Noticia"
              style={{ height: "190px", width: "240px" }}
            />
            <small style={{ color: "black" }}>
              <strong>{item.title}</strong>
            </small>
          </Link>
        ))}
        <Link
          to="/news"
          style={{
            width: "270px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img
            src={NewsIcono}
            alt="Noticia"
            style={{ height: "190px", width: "240px" }}
          />
          <small style={{ color: "black" }}>
            <strong>Más Noticias</strong>
          </small>
        </Link>
      </section>
    </div>
  );
};

export default NewsDesktop;
