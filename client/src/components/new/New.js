import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewById, getNews } from "../../actions/news";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";
import Links from "../links/Links";
import MoreNews from "./MoreNews";

const New = ({
  getNewById,
  getNews,
  news: { newItem, loading, newsArray },
  match
}) => {
  useEffect(() => {
    getNewById(match.params.id);
    getNews();
  }, [getNewById, getNews, match]);

  const date = new Date(newItem.date);
  const isEmptyObject =
    Object.entries(newItem).length === 0 && newItem.constructor === Object;

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="banner">
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1.5rem",
            color: "white"
          }}
        >
          <img
            src={NoticiasIcono}
            alt="Noticias"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <h1
            style={{
              fontSize: "40px"
            }}
          >
            NOTICIAS
          </h1>
        </section>
      </div>
      {loading || isEmptyObject ? (
        <div>Cargando Contenido...</div>
      ) : (
        <div className="news-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <p className="small NoticiaIndividual" style={{ color: "grey" }}>
              {date.getUTCDate() +
                " / " +
                date.getUTCMonth() +
                " / " +
                date.getUTCFullYear()}
            </p>
            <h2 className="NoticiaIndividual">{newItem.title}</h2>
            <img
              id="imgNoticiaIndividual"
              src={newItem.image.filename}
              alt="Noticia"
            />
            <p
              className="NoticiaIndividual"
              style={{ color: "grey", marginTop: "20px" }}
            >
              {newItem.text}
            </p>
            <p
              className="small NoticiaIndividual"
              style={{ color: "grey", marginTop: "20px" }}
            >
              Fuente: {newItem.font}
            </p>
          </div>
          <Links />
        </div>
      )}
     {
     // <MoreNews newsArray={newsArray} />
     }
    </div>
  );
};

New.propTypes = {
  news: PropTypes.object.isRequired,
  getNewById: PropTypes.func.isRequired,
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNewById, getNews }
)(New);
