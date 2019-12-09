import React from "react";
import { Link } from "react-router-dom";
import beca from "../../img/BECA.png";
import residencia from "../../img/RESIDENCIA1.png";

const Convocatorias = () => {
  return (
    <div>
      <div className="banner banner-convocatorias">
        <section
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize: "2rem"
            }}
          >
            Convocatorias
          </h1>
        </section>
      </div>
      <div className="news-container" style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "350px",
              margin: "15px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <section>
              <img
                src={residencia}
                alt="Residencia"
                style={{ height: "auto" }}
              />
            </section>
            <section
              style={{
                height: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginLeft: "5px",
                marginBottom: "5px"
              }}
            >
              <strong style={{ color: "#4c316d" }}>
                Residencia Universitaria
              </strong>
              <Link
                to="/convocatorias/residencia"
                className="btn btn-light"
                style={{ width: "40%" }}
              >
                leer más
              </Link>
            </section>
          </div>
          <div
            style={{
              width: "350px",
              margin: "15px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <section>
              <img src={beca} alt="Residencia" style={{ height: "auto" }} />
            </section>
            <section
              style={{
                height: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginLeft: "5px",
                marginBottom: "5px"
              }}
            >
              <strong style={{ color: "#4c316d" }}>Beca Estudiantil</strong>
              <Link
                to="/convocatorias/beca"
                className="btn btn-light"
                style={{ width: "40%" }}
              >
                leer más
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convocatorias;
