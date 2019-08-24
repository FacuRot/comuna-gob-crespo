import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMoreNews } from "../../actions/news";
import { Link } from "react-router-dom";

const MoreNews = ({ getMoreNews, news: { moreNews, loading } }) => {
  useEffect(() => {
    getMoreNews();
  }, [getMoreNews]);

  return (
    <div
      className="moreNewsDesktop"
      style={{ paddingTop: "60px", paddingBottom: "60px", paddingLeft: "60px" }}
    >
      <h3>Tambien te puede interesar: </h3>
      <div style={{ display: "flex" }}>
        {loading || moreNews === [] ? (
          <h3>Cargando Noticias Interesantes...</h3>
        ) : (
          moreNews.slice(0, 4).map(item => (
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
                  to={`/noticia/${item._id}`}
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
  getMoreNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getMoreNews }
)(MoreNews);
