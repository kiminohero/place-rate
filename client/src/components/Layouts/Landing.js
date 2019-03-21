import React, { Component } from 'react';
import '../index.css';

class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">AdvenFinder</h1>
                <p className="lead">
                  Search adventure locations and Join the discussion with other
                  adventurers
                </p>
                <hr />
                <a href="#" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="#" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
