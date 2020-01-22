import React from "react";
import LinksConvocatorias from "../links/LinksConvocatorias";
import residencia from "../../img/RESIDENCIA1.png";
import inscripciones from "../../img/inscripciones-03.png";

const Residencia = () => {
  return (
    <div>
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
            src={inscripciones}
            alt="inscripciones"
            className="hide-sm"
            style={{
              width: "3rem",
              height: "auto",
              marginRight: "1rem"
            }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white"
            }}
          >
            Residencia Estudiantil
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div className="tallerItem">
          <img
            src={residencia}
            alt="Residencia Estudiantil"
            style={{ height: "auto" }}
          />
          <p>
            El Programa de Residencias Estudiantiles persigue el propósito de
            prestar y proporcionar alojamiento a estudiantes que realizan sus
            estudios en la ciudad de Santa Fe. Responde a la necesidad que
            manifiestan jóvenes de nuestra localidad en plantearse continuar sus
            estudios en niveles superiores. La comuna dispone de cuatro
            departamentos, alquilados; ubicados estratégicamente en zona
            céntrica de la ciudad de Santa Fe; considerando la accesibilidad en
            líneas de colectivos y demás servicios. Para acceder y/o conservar
            el beneficio estudiantil; los residentes deberán cumplir con los
            requisitos académicos, de comportamiento y de mantenimiento
            edilicio. A partir de presentación de documentación en tiempo y
            forma, y entrevistas personales; los becados son evaluados por el
            equipo a cargo de dicho programa.
          </p>
        </div>
        <div>
          <LinksConvocatorias />
        </div>
      </div>
    </div>
  );
};

export default Residencia;
