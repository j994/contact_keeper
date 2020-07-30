import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Router>
                <PrivateRoute as={Home} path='/' />
                <Home path='/' />
                <About path='about' />
                <Register path='register' />
                <Login path='login' />
              </Router>
            </div>
          </Fragment>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
