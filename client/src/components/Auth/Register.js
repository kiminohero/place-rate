import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
      // password2: this.state.password2
    };
    console.log(newUser);

    axios
      .post("/auth/register", newUser)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data));
    // console.log(res);
  };

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your Account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      placeholder="First Name"
                      name="firstname"
                      type="text"
                      value={this.state.firstname}
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      type="text"
                      value={this.state.lastname}
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={this.state.username}
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Confirm Password"
                      name="password2"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password2}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
