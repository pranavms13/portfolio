import React, { useState, useEffect } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Courses from "./components/Courses/Courses";
import Sponsor from "./components/Sponsor/Sponsor";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider template={AlertTemplate} {...options}>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/courses" component={Courses} />
            <Route path="/sponsor" component={Sponsor} />
            <Route exact path="/donate">
              <Redirect to="/sponsor" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
