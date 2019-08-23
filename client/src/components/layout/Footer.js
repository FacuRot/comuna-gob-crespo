import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <section style={{ marginTop: "10px", marginBottom: "10px" }}>
        <section
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <i class="fas fa-map-marker-alt fa-lg" style={{ color: "white" }} />
          <p style={{ color: "white", marginLeft: "10px" }}>
            <strong>
              Av. San Martin 198 Gobernador Crespo, Santa Fe, Argentina
            </strong>
          </p>
        </section>
        <section
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <i class="fas fa-phone-alt fa-lg" style={{ color: "white" }} />
          <p style={{ color: "white", marginLeft: "5px" }}>
            <strong>03498 48-0264</strong>
          </p>
        </section>
      </section>
      <section style={{ display: "flex", marginRight: "10px" }}>
        <a href="https://instagram.com/comunagcrespo" target="blank">
          <i
            className="fab fa-instagram fa-2x"
            style={{ color: "white", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://facebook.com/Comuna-de-Gobernador-Crespo-147009232165890"
          target="blank"
        >
          <i className="fab fa-facebook fa-2x" style={{ color: "white" }} />
        </a>
      </section>
    </div>
  );
};

export default Footer;
