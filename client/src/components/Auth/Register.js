import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

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
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);

    axios
      .post("/auth/register", newUser)
      .then(res => {
        console.log(res);
        // this.setState({ errors: {} });
      })
      .catch(err => this.setState({ errors: err.response.data }));
    // console.log(res);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your Account</p>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      placeholder="First Name"
                      name="firstname"
                      type="text"
                      value={this.state.firstname}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.firstname
                      })}
                      onChange={this.onChange}
                    />
                    {errors.firstname && (
                      <div className="invalid-feedback">{errors.firstname}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      type="text"
                      value={this.state.lastname}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.lastname
                      })}
                      onChange={this.onChange}
                    />
                    {errors.lastname && (
                      <div className="invalid-feedback">{errors.lastname}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={this.state.username}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.username
                      })}
                      onChange={this.onChange}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Confirm Password"
                      name="password2"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password2}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password2
                      })}
                    />
                    {errors.password2 && (
                      <div className="invalid-feedback">{errors.password2}</div>
                    )}
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
