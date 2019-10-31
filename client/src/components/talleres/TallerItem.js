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
            <section style={{ maxWidth: "75%", margin: "auto" }}>
              <img
                src={nenito}
                alt="taller"
                className="hide-sm"
                style={{
                  width: "3rem",
                  height: "auto",
                  marginRight: "1rem"
                }}
              />
              <h1
                style={{
                  fontSize: "2rem"
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
