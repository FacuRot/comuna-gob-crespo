import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import NewsItemDesktop from "./NewsItemDesktop";
import NoticiasIcono from "../newsInLanding/noticiasIcono.png";

const News = ({ getNews, news: { loading, newsArray } }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  const content =
    loading || newsArray === [] ? (
      <div>Cargando Contenido...</div>
    ) : (
      <NewsItemDesktop newsArray={newsArray} />
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
            src={NoticiasIcono}
            alt="Noticias"
            className="hide-sm"
            style={{ width: "3rem",
              height: "auto",
              marginRight: "1rem" }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white"
            }}
          >
            Noticias
          </h1>
        </section>
      </div>
      {content}
    </div>
  );
};

News.propTypes = {
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, { getNews })(News);
