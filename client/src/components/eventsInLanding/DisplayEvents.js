import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import Agenda from "../create-events/agenda.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const DisplayEvents = ({ getEvents, events: { loading, eventsArray } }) => {
  useEffect(() => {
    getEvents();
  }, []);

  const getDayString = day => {
    switch (day) {
      case 0:
        return "DOM";
      case 1:
        return "LUN";
      case 2:
        return "MAR";
      case 3:
        return "MIE";
      case 4:
        return "JUE";
      case 5:
        return "VIE";
      case 6:
        return "SAB";
      default:
        return "";
    }
  };

  const getMonthString = month => {
    switch (month) {
      case 0:
        return "ENE";
      case 1:
        return "FEB";
      case 2:
        return "MAR";
      case 3:
        return "ABR";
      case 4:
        return "MAY";
      case 5:
        return "JUN";
      case 6:
        return "JUL";
      case 7:
        return "AGO";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "NOV";
      case 11:
        return "DIC";
      default:
        return "";
    }
  };

  const resItems = {
    0: {
      items: 1
    },
    1024: {
      items: 4
    }
  };

  const content =
    loading || eventsArray === [] ? null : (
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "70px",
            marginLeft: "5%",
            paddingTop: "25px",
            paddingBottom: "25px"
          }}
        >
          <img
            src={Agenda}
            alt="Agenda"
            style={{ height: "30px", width: "auto" }}
          />
          <h3 style={{ color: "grey", marginLeft: "5px" }}>
            AGENDA DE EVENTOS Y ACTOS
          </h3>
        </section>
        <AliceCarousel
          responsive={resItems}
          mouseDragEnabled={true}
          dotsDisabled={true}
          buttonsDisabled={true}
          autoPlay={true}
          autoPlayInterval={5000}
        >
          {eventsArray.map(item => {
            const current = new Date(item.date);
            return (
              <div
                style={{
                  paddingBottom: "50px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "green"
                  }}
                >
                  <p>
                    <strong>{getDayString(current.getUTCDay())}</strong>
                  </p>
                  <p>
                    <strong>{current.getUTCDate()}</strong>
                  </p>
                  <p>
                    <strong>{getMonthString(current.getUTCMonth())}</strong>
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    color: "grey",
                    marginLeft: "10px"
                  }}
                >
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    );

  return content;
};

DisplayEvents.propTypes = {
  events: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(DisplayEvents);
