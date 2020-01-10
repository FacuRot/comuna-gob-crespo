import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Placeholder from "./placeholder.png";
import { createNews, getNewById } from "../../actions/news";
import { Link } from "react-router-dom";
import Noticias from "./noticiasIcono.png";
import Alert from "../layout/Alert";

class CreateNews extends Component {
  constructor() {
    super();
    this.state = {
      image: Placeholder,
      title: "",
      text: "",
      font: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id !== "0") {
      this.props.getNewById(this.props.match.params.id);
    }

    const newItem = this.props.news.newItem;
    if (newItem !== null) {
      this.setState({
        title: newItem.title,
        text: newItem.text,
        font: newItem.font
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newsData = {
      title: this.state.title,
      text: this.state.text,
      font: this.state.font,
      postImage: this.img.files[0]
    };

    this.props.createNews(
      this.props.match.params.id,
      newsData,
      this.props.history
    );
  }

  render() {
    return (
      <div className="container">
        <Alert />
        <h1 className="large text-primary">Redacta una noticia</h1>
        <p className="lead">
          <img
            src={Noticias}
            alt="Noticias"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "5px"
            }}
          />
          Completa los campos para poder publicar la noticia
        </p>
        <small>* = campos requeridos</small>
        <div className="text-center">
          <img
            src={this.state.image}
            id="target"
            alt="profile pic"
            style={{
              height: "150px",
              width: "150px"
            }}
            className="mx-auto d-block mb-3"
          />
        </div>
        <small
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Preview de la imagen de la noticia
        </small>

        <form
          className="form"
          onSubmit={this.onSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group text-center">
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              className="inputfile"
              ref={file => (this.img = file)}
              onChange={this.onImageChange}
            />
            <label htmlFor="file" className="btn">
              Subir Imagen
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="*Titulo"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <small className="form-text">
              Un texto corto que sirva de titulo para la noticia
            </small>
          </div>

          <div className="form-group">
            <textarea
              placeholder="*Cuerpo de la notica"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
            <small className="form-text">Redacta aqui la noticia</small>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Fuente"
              name="font"
              value={this.state.font}
              onChange={this.onChange}
            />
            <small className="form-text">
              Fuente o fuentes de donde se obtuvieron los datos que se publican.
            </small>
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary my-1"
          />
          <Link className="btn my-1" to="/dashboard">
            Volver
          </Link>
        </form>
      </div>
    );
  }
}

CreateNews.propTypes = {
  auth: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired,
  createNews: PropTypes.func.isRequired,
  getNewById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  news: state.news
});

export default connect(mapStateToProps, { createNews, getNewById })(CreateNews);
