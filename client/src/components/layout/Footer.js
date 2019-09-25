import React from "react";
import LogoComuna from "../../img/logocomuna-02.png";

const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="footer">
        <section style={{ marginTop: "10px", marginBottom: "10px" }}>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px"
            }}
          >
            <i className="fas fa-map-marker-alt" style={{ color: "black" }} />
            <p className="small" style={{ color: "black", marginLeft: "10px" }}>
              Av. San Martin 198 Gobernador Crespo, Santa Fe, Argentina
            </p>
          </section>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px"
            }}
          >
            <i className="fas fa-phone-alt" style={{ color: "black" }} />
            <p className="small" style={{ color: "black", marginLeft: "5px" }}>
              03498 48-0264
            </p>
          </section>
        </section>
        <section style={{ display: "flex", marginRight: "10px" }}>
          <img
            src={LogoComuna}
            alt="Comuna"
            style={{ width: "110px", height: "auto" }}
          />
        </section>
      </div>
      <div className="bg-gradient" style={{ height: "15px" }}></div>
    </div>
  );
};

export default Footer;
