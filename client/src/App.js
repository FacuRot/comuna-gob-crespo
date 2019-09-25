import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
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
              <PrivateRoute exact path="/create-news" component={CreateNews} />
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
              <Route exact path="/news" component={News} />
              <Route exact path="/noticia/:id" component={New} />
              <Route exact path="/comuna" component={Comuna} />
              <Route exact path="/contacto" component={Contact} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
