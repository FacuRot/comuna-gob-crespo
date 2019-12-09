import React from "react";
import LinksConvocatorias from "../links/LinksConvocatorias";
import beca from "../../img/BECA.png";
import inscripciones from "../../img/inscripciones-03.png";

const Beca = () => {
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
            src={inscripciones}
            alt="inscripciones"
            className="hide-sm"
            style={{
              width: "3rem",
              height: "auto",
              marginRight: "1rem"
            }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "white"
            }}
          >
            Beca Estudiantil
          </h1>
        </section>
      </div>
      <div className="news-container">
        <div className="tallerItem">
          <img src={beca} alt="Beca Estudiantil" style={{ height: "auto" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            maxime debitis magnam provident ab, eum molestias repellendus ex
            voluptatum rem labore assumenda minima placeat temporibus. Facilis
            tempore odio culpa. Nobis tempore suscipit repellat, doloribus, ut
            quos reprehenderit autem fugiat animi sapiente perferendis dolor
            cupiditate dolorum iusto? Perspiciatis voluptatem quis, placeat
            quaerat fugiat, necessitatibus assumenda optio ab nostrum enim
            beatae. Laborum atque nemo, illo, perspiciatis repellat molestiae
            facilis voluptatibus reiciendis fugit nulla aut amet esse explicabo
            suscipit beatae exercitationem architecto. Perferendis a quas natus
            quo suscipit optio ipsam voluptatum perspiciatis consequuntur quidem
            assumenda, rerum vel, harum fugiat sunt ex autem aliquam.
          </p>
        </div>
        <div>
          <LinksConvocatorias />
        </div>
      </div>
    </div>
  );
};

export default Beca;
