import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import Logo from "../../img/logocomuna-02.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const [shouldDisplayList, setShouldDisplayList] = useState(false);
  const [shouldDisplayTramites, setShouldDisplayTramites] = useState(false);
  const [shouldDisplayComuna, setShouldDisplayComuna] = useState(false);
  const [position, setPosition] = useState("static");
  const [top, setTop] = useState();
  const [navRef, setRef] = useState(React.createRef());

  const handleScroll = () => {
    var sticky = navRef.current.offsetTop;

    if (window.pageYOffset > sticky) {
      setPosition("fixed");
      setTop("0");
    }
    if (window.pageYOffset < 102) {
      setPosition("static");
      setTop("102");
    }
  };

  const getMonthString = month => {
    switch (month) {
      case 0:
        return "Enero";
      case 1:
        return "Febrero";
      case 2:
        return "Marzo";
      case 3:
        return "Abril";
      case 4:
        return "Mayo";
      case 5:
        return "Junio";
      case 6:
        return "Julio";
      case 7:
        return "Agosto";
      case 8:
        return "Septiembre";
      case 9:
        return "Octubre";
      case 10:
        return "Noviembre";
      case 11:
        return "Diciembre";
      default:
        return "";
    }
  };

  const today = new Date();

  const AuthLink = (
    <div>
      <a onClick={logout} href="#!">
        <i className="fas fa-sign-out-alt" /> Salir
      </a>
      <Link to="/dashboard">
        <i className="fas fa-user" /> Panel de control
      </Link>
    </div>
  );

  const tramites = shouldDisplayTramites && (
    <section className="tramites">
      <Link
        to="/licencia-conducir"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayTramites(!shouldDisplayTramites);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Licencia de Conducir
      </Link>
      <Link
        to="/solicitud-alta"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayTramites(!shouldDisplayTramites);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Solicitud de Alta
      </Link>
      <Link
        to="/tasa-rural"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayTramites(!shouldDisplayTramites);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Tasa Rural
      </Link>
      <a
        href="http://gcrespo.boletaweb.com.ar"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "black",
          textDecoration: "none"
        }}
        onClick={() => {
          setShouldDisplayTramites(!shouldDisplayTramites);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Liquidaciones
      </a>
      <Link
        to="/aranceles"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayTramites(!shouldDisplayTramites);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Aranceles
      </Link>
    </section>
  );

  const comuna = shouldDisplayComuna && (
    <section className="tramites">
      <Link
        to="/comuna"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayComuna(!shouldDisplayComuna);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Nosotros
      </Link>
      <Link
        to="/talleres"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayComuna(!shouldDisplayComuna);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Talleres
      </Link>
      <Link
        to="/seguridad-vial"
        style={{ color: "black" }}
        onClick={() => {
          setShouldDisplayComuna(!shouldDisplayComuna);
          setShouldDisplayList(!shouldDisplayList);
        }}
      >
        Seguridad Vial
      </Link>
    </section>
  );

  var displayList = shouldDisplayList ? (
    <section className="movilList">
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
            style={{ color: "black" }}
          >
            <strong>INICIO</strong>
          </Link>
        </li>
        <li>
          <span
            style={{ color: "black" }}
            onClick={() => setShouldDisplayComuna(!shouldDisplayComuna)}
          >
            <strong>COMUNA</strong>{" "}
            <i
              className={`fas ${
                shouldDisplayComuna ? "fa-angle-up" : "fa-angle-down"
              } fa-lg`}
            />
          </span>
        </li>
        {comuna}
        <li>
          <Link
            to="/news"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
            style={{ color: "black" }}
          >
            <strong>NOTICIAS</strong>
          </Link>
        </li>
        <li>
          <span
            style={{ color: "black" }}
            onClick={() => setShouldDisplayTramites(!shouldDisplayTramites)}
          >
            <strong>TRAMITES</strong>{" "}
            <i
              className={`fas ${
                shouldDisplayTramites ? "fa-angle-up" : "fa-angle-down"
              } fa-lg`}
            />
          </span>
        </li>
        {tramites}
        <li>
          <Link
            to="/contacto"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
            style={{ color: "black" }}
          >
            <strong>CONTACTO</strong>
          </Link>
        </li>
      </ul>
    </section>
  ) : null;

  return (
    <nav>
      <div id="desktopNav">
        <div
          className="bg-gradient"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            color: "white"
          }}
        >
          <p style={{ marginRight: "0.25rem", paddingRight: "0.80rem" }}>
            {today.getDate() +
              " de " +
              getMonthString(today.getMonth()) +
              " del " +
              today.getFullYear()}
          </p>
        </div>
      </div>
      <div className="navbar">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo Comuna"
            style={{
              width: "100px",
              height: "auto",
              marginLeft: "7px"
            }}
          />
        </Link>
        <div id="navSocialLinks">
          <a href="https://www.instagram.com/comunagcrespo" target="blank">
            <i className="fab fa-instagram fa-2x"></i>
          </a>

          <a
            href="https://www.facebook.com/Comuna-de-Gobernador-Crespo-147009232165890/"
            target="blank"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <div id="movilNav">
          <i
            className="fas fa-bars fa-2x"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
            style={{ color: "black", paddingTop: "10px", marginRight: "7px" }}
          />
          {displayList}
        </div>
        {!loading && <Fragment>{isAuthenticated && AuthLink}</Fragment>}
      </div>
      <div
        id="desktopNav"
        ref={navRef}
        style={{
          position: `${position}`,
          width: "100%",
          zIndex: "10",
          top: `${top}`,
          backgroundColor: "#eeeded"
        }}
      >
        <ul>
          <li>
            <Link to="/" style={{ color: "black" }}>
              <strong>INICIO</strong>
            </Link>
          </li>
          <li>
            <span
              style={{ color: "black" }}
              onClick={() => setShouldDisplayComuna(!shouldDisplayComuna)}
            >
              <strong>COMUNA</strong>{" "}
              <i
                className={`fas ${
                  shouldDisplayComuna ? "fa-angle-up" : "fa-angle-down"
                } fa-lg`}
              />
            </span>
            {comuna}
          </li>
          <li>
            <Link to="/news" style={{ color: "black" }}>
              <strong>NOTICIAS</strong>
            </Link>
          </li>
          <li>
            <span
              style={{ color: "black" }}
              onClick={() => setShouldDisplayTramites(!shouldDisplayTramites)}
            >
              <strong>TRAMITES</strong>{" "}
              <i
                className={`fas ${
                  shouldDisplayTramites ? "fa-angle-up" : "fa-angle-down"
                } fa-lg`}
              />
            </span>
            {tramites}
          </li>
          <li>
            <Link to="/contacto" style={{ color: "black" }}>
              <strong>CONTACTO</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
