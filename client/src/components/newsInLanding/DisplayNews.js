import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import newsIcon from "./noticiasIcono.png";
import NewsDesktop from "./NewsDesktop";
import NewsMobile from "./NewsMobile";

const DisplayNews = ({ getNews, news: { loading, newsArray } }) => {
  useEffect(() => {
    getNews();
  }, []);

  const content =
    loading || newsArray === [] ? null : (
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
          <section
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={newsIcon}
              alt="Noticias"
              style={{ height: "30px", width: "auto" }}
            />
            <h2 style={{ color: "white", marginLeft: "5px" }}>Noticias</h2>
          </section>
          <section className="news-desktop">
            <NewsDesktop news={newsArray} />
          </section>
        </div>
        <section className="news-mobile">
          <NewsMobile news={newsArray} />
        </section>
      </div>
    );

  return <div>{content}</div>;
};

DisplayNews.propTypes = {
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews }
)(DisplayNews);
