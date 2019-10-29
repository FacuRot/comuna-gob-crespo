import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import newsIcon from "./NOTICIAS-black.png";
import NewsDesktop from "./NewsDesktop";
import NewsMobile from "./NewsMobile";

const DisplayNews = ({ getNews, news: { loading, newsArray } }) => {
  useEffect(() => {
    getNews();
  }, []);

  const content =
    loading || newsArray === [] ? null : (
      <div
        style={{
          backgroundColor: "#eeeded",
          paddingTop: "10px",
          paddingBottom: "25px"
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <section
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={newsIcon}
              alt="Noticias"
              style={{ height: "30px", width: "auto" }}
            />
            <h1 style={{ marginLeft: "5px" }}>NOTICIAS</h1>
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
