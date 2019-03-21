import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
          <div className="container">
            <a class="navbar-brand" href="#">
              AdvenFinder
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Add
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">
                    Edit
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Delete
                  </a>
                </li> */}
              </ul>
              {/* <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form> */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
