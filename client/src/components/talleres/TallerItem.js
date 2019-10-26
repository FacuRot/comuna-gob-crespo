import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTallerById } from "../../actions/talleres";
import { Link } from "react-router-dom";
import LinksTalleres from "../links/LinksTalleres";
import nenito from "./actividadicono-01.png";

const TallerItem = ({
  match,
  getTallerById,
  talleres: { tallerItem, loading }
}) => {
  useEffect(() => {
    getTallerById(match.params.id);
  }, []);

  return (
    <div>
      {loading || tallerItem === null ? (
        <p>Cargando Contenido...</p>
      ) : (
        <div>
          <div className="banner banner-red">
            <section
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "white"
              }}
            >
              <img
                src={nenito}
                alt="taller"
                style={{ width: "40px", height: "auto", marginLeft: "5rem" }}
              />
              <h1
                style={{
                  fontSize: "40px",
                  marginLeft: "1rem"
                }}
              >
                {tallerItem.name}
              </h1>
            </section>
          </div>
          <div className="news-container">
            <div className="tallerItem">
              <img
                src={tallerItem.tallerImage.filename}
                alt={tallerItem.name}
                style={{ height: "auto" }}
              />

              <p style={{ marginLeft: "5px" }}>{tallerItem.description}</p>
              <p style={{ marginLeft: "5px", marginTop: "1rem" }}>
                <strong>Queres saber más? Contactate con nosotros.</strong>
              </p>
              <Link to="/contacto" className="btn btn-light">
                Contacto
              </Link>
            </div>
            <div>
              <LinksTalleres />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  talleres: state.talleres
});

TallerItem.propTypes = {
  getTallerById: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getTallerById }
)(TallerItem);
