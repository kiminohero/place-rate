import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListPlace from './Place/ListPlace';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import { currentUser, login } from '../actions/index';
import { lstat } from 'fs';
import Landing from './Layouts/Landing';

class App extends Component {
  componentDidMount() {
    this.props.login();
  }

  handleClick = () => {
    this.props.currentUser(this.props.authToken);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          {/* <button onClick={this.handleClick}>Get Current Logged In user</button> */}
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
