import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section from "./components/secstion/Section"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Section />
      <Footer />
    </Fragment>
  );
};

export default App;
