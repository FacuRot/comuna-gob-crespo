import React from "react";

const LinksImportantes = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #004a98, #0c84c7)",
        color: "white"
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5%",
          paddingTop: "25px"
        }}
      >
        <h2>Links de Interés</h2>
      </section>
      <section className="linksImportantes">
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3>Bancos</h3>

          <a
            href="https://www.bna.com.ar/Personas"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Nación
          </a>
          <a
            href="https://www.macro.com.ar/home-page"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Macro
          </a>
          <a
            href="https://www.bancosantafe.com.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Santa Fe
          </a>
          <a
            href="https://www.bancogalicia.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Galicia
          </a>
          <a
            href="https://www.bancocredicoop.coop/personas"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Credicoop
          </a>
          <a
            href="https://www.bbva.com.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            BBVA Francés
          </a>
        </section>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3>Medios</h3>
          <a
            href="https://www.lanacion.com.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            La Nación
          </a>
          <a
            href="https://www.clarin.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Clarín
          </a>
          <a
            href="https://www.infobae.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Info BAE
          </a>
          <a
            href="https://www.ellitoral.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            El Litoral
          </a>
          <a
            href="https://www.larazon.es/tags/argentina/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            La Razón
          </a>
        </section>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3>Correos</h3>

          <a
            href="https://mail.google.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Gmail
          </a>
          <a
            href="https://mail.yahoo.com"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Yahoo
          </a>
          <a
            href="https://outlook.live.com/owa/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Outlook / Hotmail
          </a>
          <a
            href="https://webmail.arnet.com.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Arnet
          </a>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3>Gubernamentales</h3>

          <a
            href="https://www.argentina.gob.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Argentina Gob
          </a>
          <a
            href="https://www.santafe.gov.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Gobierno de Santa Fe
          </a>
          <a
            href="https://www.afip.gob.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            AFIP
          </a>
          <a
            href="https://www.anses.gob.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            ANSES
          </a>
          <a
            href="https://www.argentina.gob.ar/senasa"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            SENASA
          </a>
        </section>
      </section>
    </div>
  );
};

export default LinksImportantes;
