import React from "react";

const Navbar = () => {
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

  return (
    <nav className="navbar bg-gradient">
      <div>
        <p>
          {today.getDate() +
            " de " +
            getMonthString(today.getMonth()) +
            " del " +
            today.getFullYear()}
        </p>
        <ul>
          <li>
            <a href="/">
              <strong>COMUNA</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>NOTICIAS</strong>
            </a>
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
            <a href="/">
              <strong>EMPRESAS</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>CONTACTO</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
