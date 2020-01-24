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
            className="linkImportante"
          >
            Nación
          </a>
          <a
            href="https://www.macro.com.ar/home-page"
            target="_blank"
            className="linkImportante"
          >
            Macro
          </a>
          <a
            href="https://www.bancosantafe.com.ar/"
            target="_blank"
            className="linkImportante"
          >
            Santa Fe
          </a>
          <a
            href="https://www.bancogalicia.com/"
            target="_blank"
            className="linkImportante"
          >
            Galicia
          </a>
          <a
            href="https://www.bancocredicoop.coop/personas"
            target="_blank"
            className="linkImportante"
          >
            Credicoop
          </a>
          <a
            href="https://www.bbva.com.ar/"
            target="_blank"
            className="linkImportante"
          >
            BBVA Francés
          </a>
        </section>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3>Medios</h3>
          <a
            href="https://www.lanacion.com.ar/"
            target="_blank"
            className="linkImportante"
          >
            La Nación
          </a>
          <a
            href="https://www.clarin.com/"
            target="_blank"
            className="linkImportante"
          >
            Clarín
          </a>
          <a
            href="https://www.infobae.com/"
            target="_blank"
            className="linkImportante"
          >
            Info BAE
          </a>
          <a
            href="https://www.ellitoral.com/"
            target="_blank"
            className="linkImportante"
          >
            El Litoral
          </a>
          <a
            href="https://www.larazon.es/tags/argentina/"
            target="_blank"
            className="linkImportante"
          >
            La Razón
          </a>
        </section>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3>Correos</h3>

          <a
            href="https://mail.google.com/"
            target="_blank"
            className="linkImportante"
          >
            Gmail
          </a>
          <a
            href="https://mail.yahoo.com"
            target="_blank"
            className="linkImportante"
          >
            Yahoo
          </a>
          <a
            href="https://outlook.live.com/owa/"
            target="_blank"
            className="linkImportante"
          >
            Outlook / Hotmail
          </a>
          <a
            href="https://webmail.arnet.com.ar/"
            target="_blank"
            className="linkImportante"
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
            className="linkImportante"
          >
            Argentina Gob
          </a>
          <a
            href="https://www.santafe.gov.ar/"
            target="_blank"
            className="linkImportante"
          >
            Gobierno de Santa Fe
          </a>
          <a
            href="https://www.afip.gob.ar/"
            target="_blank"
            className="linkImportante"
          >
            AFIP
          </a>
          <a
            href="https://www.anses.gob.ar/"
            target="_blank"
            className="linkImportante"
          >
            ANSES
          </a>
          <a
            href="https://www.argentina.gob.ar/senasa"
            target="_blank"
            className="linkImportante"
          >
            SENASA
          </a>
        </section>
      </section>
    </div>
  );
};

export default LinksImportantes;
