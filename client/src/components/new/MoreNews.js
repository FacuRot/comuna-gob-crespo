import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import { Link } from "react-router-dom";

const MoreNews = ({ getNews, news: { newsArray, loading } }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div
      className="moreNewsDesktop"
      style={{ paddingTop: "60px", paddingBottom: "60px", paddingLeft: "60px" }}
    >
      <h3>Tambien te puede interesar: </h3>
      <div style={{ display: "flex" }}>
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
                <p>{item.text.substr(0, 100)}</p>
                <Link
                  to={`/new/${item._id}`}
                  className="btn"
                  style={{ marginTop: "20px" }}
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
  { getNews }
)(MoreNews);
