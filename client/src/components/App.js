import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentUser, login } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.login();
  }

  handleClick = () => {
    this.props.currentUser(this.props.authToken);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Get Current Logged In user</button>
      </div>
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
