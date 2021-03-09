import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTallerById } from "../../actions/talleres";
import { sendEmailTaller } from "../../actions/email";
import { Link } from "react-router-dom";
import LinksTalleres from "../links/LinksTalleres";
import nenito from "./actividadicono-01.png";
import Alert from "../layout/Alert";

const TallerItem = ({
  match,
  getTallerById,
  sendEmailTaller,
  talleres: { tallerItem, loading },
}) => {
  useEffect(() => {
    getTallerById(match.params.id);
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    edad: "",
    direccion: "",
    telefono: "",
    emailAdulto: "",
    nombreAdulto: "",
    dniAdulto: "",
    direccionAdulto: "",
    telefonoAdulto: "",
  });

  const {
    nombre,
    dni,
    edad,
    direccion,
    telefono,
    emailAdulto,
    nombreAdulto,
    dniAdulto,
    direccionAdulto,
    telefonoAdulto,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      taller: tallerItem.name,
      nombre: nombre,
      dni: dni,
      edad: edad,
      direccion: direccion,
      telefono: telefono,
      emailAdulto: emailAdulto,
      nombreAdulto: nombreAdulto,
      dniAdulto: dniAdulto,
      direccionAdulto: direccionAdulto,
      telefonoAdulto: telefonoAdulto,
    };

    const resValue = await sendEmailTaller(emailData);
    if (resValue === true) {
      setFormData({
        nombre: "",
        dni: "",
        edad: "",
        direccion: "",
        telefono: "",
        emailAdulto: "",
        nombreAdulto: "",
        dniAdulto: "",
        direccionAdulto: "",
        telefonoAdulto: "",
      });
    }

    window.scrollTo(0, 500);
  };

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
                  marginRight: "1rem",
                }}
              />
              <h1
                style={{
                  fontSize: "2rem",
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

              <p>{tallerItem.description}</p>
              <p style={{ display: "none", marginTop: "1rem" }}>
                <strong>
                  Tenes ganas de sumarte a este taller? Inscribite.
                </strong>
              </p>
              <form
                className="form"
                onSubmit={(e) => onSubmit(e)}
                style={{ display: "none" }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => onChange(e)}
                    placeholder="Nombre y Apellido"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="dni"
                    value={dni}
                    onChange={(e) => onChange(e)}
                    placeholder="DNI"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="edad"
                    value={edad}
                    onChange={(e) => onChange(e)}
                    placeholder="Edad"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="direccion"
                    value={direccion}
                    onChange={(e) => onChange(e)}
                    placeholder="Dirección"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="telefono"
                    value={telefono}
                    onChange={(e) => onChange(e)}
                    placeholder="Número de tel."
                  />
                </div>
                <small>
                  Dirección de email tuya o de un adulto responsable en caso de
                  que seas menor de edad
                </small>
                <div className="form-group">
                  <input
                    type="text"
                    name="emailAdulto"
                    value={emailAdulto}
                    onChange={(e) => onChange(e)}
                    placeholder="Email"
                  />
                </div>
                <small>
                  En caso de ser menor de edad dejanos los datos de un adulto a
                  tu cargo
                </small>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombreAdulto"
                    value={nombreAdulto}
                    onChange={(e) => onChange(e)}
                    placeholder="Nombre y Apllido del adulto"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="dniAdulto"
                    value={dniAdulto}
                    onChange={(e) => onChange(e)}
                    placeholder="DNI del adulto"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="direccionAdulto"
                    value={direccionAdulto}
                    onChange={(e) => onChange(e)}
                    placeholder="Direccion del adulto"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="telefonoAdulto"
                    value={telefonoAdulto}
                    onChange={(e) => onChange(e)}
                    placeholder="Número de tel. del adulto"
                  />
                </div>
                <input type="submit" value="Inscribirme" className="btn" />
              </form>
              <p style={{ marginTop: "1rem" }}>
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

const mapStateToProps = (state) => ({
  talleres: state.talleres,
});

TallerItem.propTypes = {
  getTallerById: PropTypes.func.isRequired,
  sendEmailTaller: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTallerById, sendEmailTaller })(
  TallerItem
);
