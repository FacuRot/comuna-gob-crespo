import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import { Link } from "react-router-dom";

const MoreNews = ({ news: { newsArray, loading } }) => {
  return (
    <div
      className="moreNewsDesktop"
      style={{ paddingTop: "3rem", paddingBottom: "3rem", width: "100%" }}
    >
      <h3>Tambien te puede interesar: </h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {loading || newsArray === [] ? (
          <h3>Cargando Noticias Interesantes...</h3>
        ) : (
          newsArray.slice(0, 4).map(item => (
            <div
              key={item._id}
              className="textOverImage"
              style={{
                backgroundImage: `url(${item.image.filename})`
              }}
            >
              <div className="divOverImage">
                <h3>{item.title}</h3>
                <p>{item.text.substr(0, 80)}</p>
                <Link
                  to={`/noticia/${item._id}`}
                  className="btn"
                  style={{ marginTop: "0.5rem" }}
                >
                  Seguir Leyendo
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

MoreNews.propTypes = {
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  {}
)(MoreNews);
