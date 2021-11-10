import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getNewById, getMoreNews, deleteNew } from "../../actions/news";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";
import Links from "../links/Links";
import MoreNews from "./MoreNews";

const New = ({
  getNewById,
  deleteNew,
  news: { newItem, loading },
  match,
  auth: { isAuthenticated },
  location,
  history,
}) => {
  useEffect(() => {
    getNewById(match.params.id);
  }, [getNewById, match]);

  const deleteAndRedirect = (id) => {
    deleteNew(id, history);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="banner" style={{ height: "25vh" }}>
        <section
          style={{
            maxWidth: "75%",
            margin: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={NoticiasIcono}
            alt="Noticias"
            className="hide-sm"
            style={{ width: "3rem", height: "auto", marginRight: "1rem" }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
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
              flexDirection: "column",
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
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              data-action="share/whatsapp/share"
              target="_blank"
              className="btn btn-light"
              style={{ marginTop: "20px" }}
            >
              Compartir esta noticia
            </a>
            {isAuthenticated && (
              <section>
                <Link
                  to={`/create-news/${newItem._id}`}
                  className="btn btn-light"
                >
                  Editar Noticia
                </Link>

                <button
                  className="btn btn-light"
                  onClick={() => deleteAndRedirect(newItem._id)}
                >
                  Eliminar Noticia
                </button>
              </section>
            )}
            <MoreNews />
          </div>
          <Links />
        </div>
      )}
    </div>
  );
};

New.propTypes = {
  news: PropTypes.object.isRequired,
  getNewById: PropTypes.func.isRequired,
  deleteNew: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news,
  auth: state.auth,
});

export default connect(mapStateToProps, { getNewById, deleteNew })(New);
