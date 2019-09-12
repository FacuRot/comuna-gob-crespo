import React from "react";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";
import Links from "../links/Links";

const Comuna = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="banner">
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1.5rem",
            color: "white"
          }}
        >
          <img
            src={NoticiasIcono}
            alt="Noticias"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <h1
            style={{
              fontSize: "40px"
            }}
          >
            Comuna
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div style={{ flexGrow: "2", margin: "10px" }}>
          <h3 style={{ marginBottom: "25px" }}>
            La Comisión Comunal está compuesta por
          </h3>
          <table>
            <tr>
              <td style={{ color: "grey" }}>PRESIDENTE</td>
              <td>LEMAIRE Luciano Gabriel</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>VICEPRESIDENTE</td>
              <td>BARONI Pablo Luis María</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>TESORERA</td>
              <td>MORELLI Gisela Susana</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>SECRETARIO</td>
              <td>FAVA Cristian Javier</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>1° VOCAL</td>
              <td>GAUCHAT Laura Andrea</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>ASITENCIA SOCIAL</td>
              <td>Sra. Gisela Morelli</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>SEGURIDAD ALIMENTARIA</td>
              <td>Lic. Nazareno Brunás</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>OBRAS PÚBLICAS</td>
              <td>Arq. Gabriel Cancián</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>ASESORAMIENTO LEGAL</td>
              <td>Dr. Juan Manuel Nardoni</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>JUZGADO DE FALTAS</td>
              <td>Dra. Melina Cuatrín</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>PRENSA Y COMUNICACIÓN</td>
              <td>Sr. VALIENTE Alejandro</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>CULTURA</td>
              <td>Sra. SPINETTA Danisa</td>
            </tr>
          </table>
        </div>
        <Links />
      </div>
    </div>
  );
};

export default Comuna;
