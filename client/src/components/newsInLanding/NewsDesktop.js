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
            paddingTop: "20px",
            backgroundImage: "linear-gradient(to right, #004a98, #0c84c7)"
          }}
        >
          <p style={{ color: "white" }}>
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </p>
          <h3 style={{ color: "white" }}>{news[0].title}</h3>
          <p style={{ color: "white" }}>{news[0].text.substr(0, 150)}...</p>
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
        {news.slice(1, 4).map((item, i) => (
          <Link
            key={item._id}
            to={`/noticia/${item._id}`}
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <img
              src={item.image.filename}
              alt="Noticia"
              style={{ height: "200px", width: "270px" }}
            />
            <p style={{ color: "white", margin: "auto" }}>
              <strong>{item.title}</strong>
            </p>
          </Link>
        ))}
        <Link
          to="/news"
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            src={NewsIcono}
            alt="Noticia"
            style={{ height: "200px", width: "270px" }}
          />
          <p style={{ color: "white", margin: "auto" }}>
            <strong>Más Noticias</strong>
          </p>
        </Link>
      </section>
    </div>
  );
};

export default NewsDesktop;
