import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Router>
            <Home path='/' />
            <About path='about' />
          </Router>
        </div>
      </Fragment>
    </ContactState>
  );
};

export default App;
