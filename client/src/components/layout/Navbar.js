import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import Logo from "../../img/logo.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [shouldDisplayList, setShouldDisplayList] = useState(false);

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
    <a onClick={logout} href="#!">
      <i className="fas fa-sign-out-alt" /> Salir
    </a>
  );

  var displayList = shouldDisplayList ? (
    <section className="movilList">
      <ul>
        <li>
          <Link
            to="/comuna"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
          >
            <strong>COMUNA</strong>
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
          >
            <strong>NOTICIAS</strong>
          </Link>
        </li>
        <li>
          <a href="/">
            <strong>TRAMITES</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <strong>INSTITUCIONES</strong>
          </a>
        </li>
        <li>
          <Link
            to="/contacto"
            onClick={() => setShouldDisplayList(!shouldDisplayList)}
          >
            <strong>CONTACTO</strong>
          </Link>
        </li>
      </ul>
    </section>
  ) : null;

  return (
    <nav className="navbar bg-gradient">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo Comuna"
          style={{
            height: "90px",
            width: "auto",
            marginLeft: "10px",
            padding: "0px"
          }}
        />
      </Link>
      <div id="desktopNav">
        <p>
          {today.getDate() +
            " de " +
            getMonthString(today.getMonth()) +
            " del " +
            today.getFullYear()}
        </p>
        <ul>
          <li>
            <Link to="/comuna">
              <strong>COMUNA</strong>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <strong>NOTICIAS</strong>
            </Link>
          </li>
          <li>
            <a href="/">
              <strong>TRAMITES</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>INSTITUCIONES</strong>
            </a>
          </li>
          <li>
            <Link to="/contacto">
              <strong>CONTACTO</strong>
            </Link>
          </li>
        </ul>
      </div>
      <div id="movilNav">
        <i
          className="fas fa-bars fa-2x"
          onClick={() => setShouldDisplayList(!shouldDisplayList)}
          style={{ color: "white", paddingTop: "25px" }}
        />
        {displayList}
      </div>
      {!loading && <Fragment>{isAuthenticated && AuthLink}</Fragment>}
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

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
