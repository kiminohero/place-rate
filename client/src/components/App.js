import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { lstat } from 'fs';

import { currentUser, login } from "../actions/index";

// import ListPlace from './Place/ListPlace';
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Landing from "./Layouts/Landing";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  authToken: state.auth.token
});

export default connect(
  mapStateToProps,
  { currentUser, login }
)(App);
