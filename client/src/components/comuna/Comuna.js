import React from "react";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";
import Links from "../links/Links";

const Comuna = () => {
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
          <img
            src={NoticiasIcono}
            alt="Noticias"
            className="hide-sm"
            style={{ width: "3rem", height: "auto", marginRight: "1rem" }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white"
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
              <td>Lemaire, Luciano Gabriel</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>VICEPRESIDENTE</td>
              <td>Spinetta, Danisa Carolina</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>TESORERo</td>
              <td>Fava, Cristian Javier</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>SECRETARIO</td>
              <td>Baroni, Pablo Luis Maria</td>
            </tr>
            <tr>
              <td style={{ color: "grey" }}>VOCAL</td>
              <td>Perez Guevara, Ivan Martín</td>
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
