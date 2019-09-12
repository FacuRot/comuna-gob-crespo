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

export default connect(
  mapStateToProps,
  { getNews }
)(News);
