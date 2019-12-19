import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/events";
import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import isSameMonth from "date-fns/isSameMonth";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import addDays from "date-fns/addDays";
import isSameDay from "date-fns/isSameDay";
import toDate from "date-fns/toDate";
import { es } from "date-fns/locale";
import "./Calendar.css";
import Agenda from "./agendablanco.png";

const CalendarComponent = ({ getEvents, events: { loading, eventsArray } }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [fechasTabla, setFechasTabla] = useState([]);
  const [arregloEventos] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    function setEmptyArray() {
      setFechasTabla([]);
    }

    return setEmptyArray();
  });

  if (!loading || eventsArray !== null) {
    eventsArray.map(event => {
      var fechaEvento = new Date(event.date);
      fechaEvento.setHours(0);
      fechaEvento.setDate(fechaEvento.getDate() + 1);

      arregloEventos.push(fechaEvento.getTime());
    });
  }

  const checkForEventToDisplay = fecha => {
    if (!loading || eventsArray !== null) {
      eventsArray.map(event => {
        var fechaEvento = new Date(event.date);
        fechaEvento.setHours(0);
        fechaEvento.setDate(fechaEvento.getDate() + 1);

        if (fechaEvento.getTime() === fecha.getTime()) {
          fechasTabla.push(event);
        }
      });
    }
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
    setFechasTabla([]);
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
    setFechasTabla([]);
  };

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row">
        <div
          className="icon"
          onClick={prevMonth}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          chevron_left
        </div>

        <div>
          <span>{format(currentDate, dateFormat, { locale: es })}</span>
        </div>

        <div
          className="icon"
          onClick={nextMonth}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          chevron_right
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "eee";
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="column col-center"
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            backgroundColor: "#4c316d"
          }}
        >
          {format(addDays(startDate, i), dateFormat, { locale: es })}
        </div>
      );
    }
    return (
      <div className="days row" style={{ backgroundColor: "#4c316d" }}>
        {days}
      </div>
    );
  };

  const cells = () => {
    const year = currentDate.getFullYear();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        var fechaCalendario = toDate(day);
        fechaCalendario.setHours(0);

        if (isSameMonth(day, monthStart)) {
          checkForEventToDisplay(fechaCalendario);
        }

        days.push(
          <div
            className={`column cell ${
              isSameMonth(day, monthStart)
                ? arregloEventos.indexOf(fechaCalendario.getTime()) !== -1
                  ? "selected"
                  : ""
                : "disabled"
            }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {" "}
          {days}{" "}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const content =
    arregloEventos.length === 0 ? (
      <p>Cargando Contenido...</p>
    ) : (
      <div>
        <div>
          <div className="calendar">
            <div>{header()}</div>
            <div>{daysOfWeek()}</div>
            <div>{cells()}</div>
          </div>
        </div>
      </div>
    );

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
            src={Agenda}
            alt="agenda"
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
            Agenda de Actividades
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div className="tallerItem">{content}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem"
          }}
        >
          {fechasTabla.map((evento, i) => (
            <section
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: `${i % 2 !== 0 ? "#eeeded" : ""}`,
                borderStyle: "solid",
                borderWidth: "0.5px 1px 0.5px 1px",
                borderColor: "grey"
              }}
            >
              <p style={{ color: "red" }}>
                {new Date(evento.date).getUTCDate()}.
              </p>
              <h4> {evento.title}</h4>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

CalendarComponent.propTypes = {
  events: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getEvents })(CalendarComponent);
