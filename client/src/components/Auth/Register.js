import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
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
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={this.state.name}
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
