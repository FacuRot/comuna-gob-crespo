import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateNews from "./components/create-news/CreateNews";
import CreateEvents from "./components/create-events/CreateEvents";
import ChangePassword from "./components/change-password/ChangePassword";
import News from "./components/news/News";
import New from "./components/new/New";
import Comuna from "./components/comuna/Comuna";
import Contact from "./components/contact/Contact";
import AddTaller from "./components/add-taller/AddTaller";
import Talleres from "./components/talleres/Talleres.js";
import TallerItem from "./components/talleres/TallerItem.js";
import Vial from "./components/seguridad-vial/Vial";
import LicenciaConducir from "./components/tramites/LicenciaConducir";
import SolicitudAlta from "./components/tramites/SolicitudAlta";
import TasaRural from "./components/tramites/TasaRural";
import Aranceles from "./components/tramites/Aranceles";
import Convocatorias from "./components/convocatoria/Convocatorias";
import Residencia from "./components/convocatoria/Residencia";
import Beca from "./components/convocatoria/Beca";
import CalendarComponent from "./components/eventsInLanding/Calendar";
import ViviendaLotePropio from "./components/tramites/ViviendaLotePropio";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section>
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-news/:id"
                component={CreateNews}
              />
              <PrivateRoute
                exact
                path="/create-events"
                component={CreateEvents}
              />
              <PrivateRoute
                exact
                path="/change-password"
                component={ChangePassword}
              />
              <PrivateRoute exact path="/add-taller" component={AddTaller} />
              <Route exact path="/news" component={News} />
              <Route exact path="/noticia/:id" component={New} />
              <Route exact path="/comuna" component={Comuna} />
              <Route exact path="/contacto" component={Contact} />
              <Route exact path="/talleres" component={Talleres} />
              <Route exact path="/taller/:id" component={TallerItem} />
              <Route exact path="/seguridad-vial" component={Vial} />
              <Route
                exact
                path="/licencia-conducir"
                component={LicenciaConducir}
              />
              <Route exact path="/solicitud-alta" component={SolicitudAlta} />
              <Route exact path="/tasa-rural" component={TasaRural} />
              <Route exact path="/aranceles" component={Aranceles} />
              <Route exact path="/convocatorias" component={Convocatorias} />
              <Route
                exact
                path="/convocatorias/residencia"
                component={Residencia}
              />
              <Route exact path="/convocatorias/beca" component={Beca} />
              <Route exact path="/calendar" component={CalendarComponent} />
              <Route exact path="/vivienda" component={ViviendaLotePropio} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
