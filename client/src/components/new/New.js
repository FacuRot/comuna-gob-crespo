import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewById, getMoreNews } from "../../actions/news";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";
import Links from "../links/Links";
import MoreNews from "./MoreNews";

const New = ({ getNewById, news: { newItem, loading }, match }) => {
  useEffect(() => {
    getNewById(match.params.id);
  }, [getNewById, match]);

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
      {loading || newItem === null ? (
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
              {new Date(newItem.date).getUTCDate() +
                " / " +
                new Date(newItem.date).getUTCMonth() +
                " / " +
                new Date(newItem.date).getUTCFullYear()}
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

      <MoreNews />
    </div>
  );
};

New.propTypes = {
  news: PropTypes.object.isRequired,
  getNewById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNewById }
)(New);
