import React from "react";
import Logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <p style={{ color: "white", marginLeft: "10px" }}>
        <strong>COMUNA DE GOBERNADOR CRESPO</strong>
      </p>
      <img
        src={Logo}
        alt="Comuna"
        style={{
          height: "120px",
          width: "auto",
          marginRight: "10px"
        }}
      />
    </div>
  );
};

export default Footer;
