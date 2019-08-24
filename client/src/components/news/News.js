import React from "react";
import { connect } from "react-redux";
import NewsItemDesktop from "./NewsItemDesktop";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";

const News = ({ news: { loading, newsArray } }) => {
  const content =
    loading || newsArray === [] ? (
      <div>Cargando Contenido...</div>
    ) : (
      <NewsItemDesktop newsArray={newsArray} />
    );

  return (
    <div
      style={{
        backgroundColor: "white"
      }}
    >
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
            NOTICIAS
          </h1>
        </section>
      </div>
      {content}
    </div>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  {}
)(News);
