import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Links from "../links/Links";
import { sendEmail } from "../../actions/email";
import Alert from "../layout/Alert";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({ sendEmail, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: ""
  });

  const { name, email, text } = formData;
  const recaptchaRef = React.createRef();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();

    const emailData = {
      name: name,
      email: email,
      text: text,
      captcha: recaptchaValue
    };

    sendEmail(emailData, history);
  };

  const position = [-30.3632026, -60.4037569];

  const map = (
    <Map center={position} zoom={13} style={{ height: "45vh", zIndex: "0" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiZmFjdXJvdCIsImEiOiJjanF3ZDBzdmoxNHdwNDlrOHgxdGtkYTMwIn0._B0mnawUQW7uXLZ0JPs2Kw}"
        accessToken="pk.eyJ1IjoiZmFjdXJvdCIsImEiOiJjanF3ZDBzdmoxNHdwNDlrOHgxdGtkYTMwIn0._B0mnawUQW7uXLZ0JPs2Kw"
      />
      <Marker position={position}>
        <Popup>Comuna de Gdor.Crespo.</Popup>
      </Marker>
    </Map>
  );

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
            justifyContent: "flex-start"
          }}
        >
          <i
            className="fas fa-phone-alt fa-2x"
            style={{
              width: "3rem",
              height: "auto",
              marginRight: "1rem",
              color: "white"
            }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white"
            }}
          >
            Contacto
          </h1>
        </section>
      </div>
      <iframe
        title="Map"
        width="100%"
        frameBorder="0"
        style={{ border: "0", height: "55vh" }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXi6RldQ9oUvwRXeFLB5bZ3WlBNGyIO9E
        &q=Comuna+de+Gobernador+Crespo"
        allowFullScreen
      ></iframe>
      <Alert />
      <div className="news-container" style={{ marginTop: "10px" }}>
        <form
          className="form"
          onSubmit={e => onSubmit(e)}
          method="POST"
          style={{ flexGrow: "2", margin: "10px" }}
        >
          <div className="form-group">
            <h4>Nombre</h4>
            <input
              type="text"
              placeholder="*Nombre"
              name="name"
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Correo Electronico</h4>
            <input
              type="email"
              placeholder="*Correo Electronico"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Mensaje</h4>
            <textarea
              type="text"
              placeholder="*Mensaje"
              name="text"
              value={text}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="form-group">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeHY7UUAAAAAHApBI8UJSUowF7-6b-v9TSgdh1b"
              onChange={onChange}
            />
          </div>

          <input type="submit" value="Enviar" className="btn my-1" />
          <Link className="btn my-1" to="/">
            Volver
          </Link>
        </form>
        <Links />
      </div>
    </div>
  );
};

Contact.propTypes = {
  sendEmail: PropTypes.func.isRequired
};

export default connect(null, { sendEmail })(Contact);
