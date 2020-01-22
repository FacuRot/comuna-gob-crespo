import React from "react";
import LinksConvocatorias from "../links/LinksConvocatorias";
import beca from "../../img/BECA.png";
import inscripciones from "../../img/inscripciones-03.png";

const Beca = () => {
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
            Beca Estudiantil
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div className="tallerItem">
          <img src={beca} alt="Beca Estudiantil" style={{ height: "auto" }} />
          <p>
            El sistema de becas económicas está dirigido a estudiantes de
            carreras superiores que se dictan, en su mayoría, en otras
            localidades que no sea la Ciudad de Santa Fe. Representa una ayuda
            económica mensual con cobertura anual de nueve meses consecutivos
            (desde el mes de Abril al mes de Diciembre). Como población
            prioritaria está destinada a aquellos estudiantes cuya situación
            socioeconómica sea considerada vulnerable y/o en proceso de no poder
            garantizar la continuidad de esos estudios; cada situación es
            particular y se evalúa como tal. Si bien representa un aporte,
            quizás insignificante en el proceso educativo; este sistema pretende
            contemplar como marco referencial, el monto económico que debe
            cubrir mensualmente, un estudiante, a la ciudad de San Justo,
            considerando el medio boleto estudiantil.
          </p>
        </div>
        <div>
          <LinksConvocatorias />
        </div>
      </div>
    </div>
  );
};

export default Beca;
