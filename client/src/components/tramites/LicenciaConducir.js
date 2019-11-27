import React from "react";
import LinksVial from "../links/LinksVial";
import pdfLicencia from "../../contenido descargable/ansv_licencias_libro_senales_de_transito.pdf";

const LicenciaConducir = () => (
  <div>
    <div className="banner banner-blue">
      <section
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "5rem",
          color: "white"
        }}
      >
        <h1
          style={{
            fontSize: "40px"
          }}
        >
          Licencia de Conducir
        </h1>
      </section>
    </div>
    <div className="news-container">
      <div id="licenciaConducirDiv">
        <h3>Requisitos</h3>
        <p>
          Por nuevas disposiciones provinciales vigentes desde 2015, en adhesión
          a registros nacionales,{" "}
          <strong>
            quienes tramiten las renovaciones y/o Licencias originales, deberán
            asistir previamente a una capacitación de Seguridad Vial presencial
            obligatoria en las jurisdicciones de los centros de emisión
            habilitados que correspondan a su domicilio
          </strong>
          . En nuestra Comuna, las capacitaciones se dictan el primer día Martes
          de cada mes (exclusivamente) a partir de las 19 hs. en el Salón
          Cultural “Angélica Faisal”, en carácter informativa y educativa sobre
          conciencia vial, dirigida a quienes deban certificar la asistencia
          obligatoria para realizar su trámite, y abiertas al público en
          general. Su asistencia tiene validez de 6 meses y se acreditará para
          todas las categorías de Licencias existentes.{" "}
          <strong>
            Como alternativa, se encuentra disponible el “Curso Nacional de
            Educación Vial Digital”, con el cual, en nuestra jurisdicción, a
            través de su certificación se podrá reemplazar la asistencia
            obligatoria a la capacitación presencial
          </strong>
          . Una vez ingresado en el sitio curso.seguridadvial.gob.ar/ansv :
        </p>
        <ul style={{ marginBottom: "2rem" }}>
          <li>
            - seleccionar REGISTRATE, luego “Auto” o “Moto” para completar sus
            datos personales, junto a un correo electrónico;
          </li>
          <li>
            - tildar en “Acepto los términos y condiciones” y finalizar
            registro;
          </li>
          <li>
            - acceder desde su casilla de correo electrónico al enlace de
            confirmación de cuenta que el sitio le notificará automáticamente;
          </li>
          <li>
            - ingresar a dicha dirección y quedará confirmada su cuenta, donde
            podrá seleccionar “Comenzar Curso”, o Cerrar Sesión y volver desde
            ENTRAR, según disposición;
          </li>
          <li>
            -{" "}
            <strong>
              finalizados los módulos didácticos que componen cada opción,
              imprimir los Comprobantes/Certificados, que deberán presentarse
              para solicitar turnos en el Juzgado de Faltas, de lunes a viernes
              de 7 a 13 hs., junto con su D.N.I. y Licencias de Conducir
              actuales (si posee), sin excepción. Se le otorgará día y horario
              (plazo máximo de 2 semanas) para presentarse en la Comuna local
              con la documentación pertinente
            </strong>{" "}
            que se le informará al momento de fijarse el mismo, para luego allí
            finalizar con los trámites administrativos, exámenes
            psicofísicos/psicológicos y teóricos/prácticos, según correspondiera
            a las clases requeridas y edad del solicitante. exámenes
            psicofísicos/psicológicos y teóricos/prácticos, según correspondiera
            a las clases requeridas y edad del solicitante.
          </li>
        </ul>
        <h3>Práctica de Exámen</h3>
        <ul style={{ marginBottom: "2rem" }}>
          <li>
            - Simulador del Examen Teórico: <br />
            <a
              href="https://www.santafe.gob.ar/examenlicencia/examenETLC/listarCuestionarios.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cuestionarios
            </a>
          </li>
          <li>
            - Cuestionario para Clase: <br />
            A21 – A22 – A3 – B1 – B2 – C – D1 – D2 – E1 – E2 – G1 – G2
          </li>
        </ul>
        <h3>Material de Estudio</h3>
        <a
          href={pdfLicencia}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          Descargar
        </a>
      </div>
      <div>
        <LinksVial />
      </div>
    </div>
  </div>
);

export default LicenciaConducir;
