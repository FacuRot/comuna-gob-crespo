import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTalleres } from "../../actions/talleres";
import { Link } from "react-router-dom";

const Talleres = ({ getTalleres, talleres: { loading, talleres } }) => {
  useEffect(() => {
    getTalleres();
  }, []);

  return (
    <div>
      <div className="banner banner-talleres">
        <section
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize: "2rem"
            }}
          >
            Talleres y Actividades
          </h1>
        </section>
      </div>
      {loading || talleres === [] ? (
        <p>Cargando Contenido...</p>
      ) : (
        <div className="news-container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {talleres.map(taller => (
              <div
                style={{
                  width: "300px",
                  margin: "15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <section>
                  <img
                    src={taller.tallerImage.filename}
                    alt="Taller"
                    style={{ height: "auto" }}
                  />
                </section>
                <section
                  style={{
                    height: "70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    marginLeft: "5px",
                    marginBottom: "5px"
                  }}
                >
                  <strong style={{ color: "#e1052d" }}>{taller.name}</strong>
                  <Link
                    to={`/taller/${taller._id}`}
                    className="btn btn-light"
                    style={{ width: "40%" }}
                  >
                    leer más
                  </Link>
                </section>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  talleres: state.talleres
});

Talleres.propTypes = {
  talleres: PropTypes.object.isRequired,
  getTalleres: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getTalleres }
)(Talleres);
