import React from "react";
import PropTypes from "prop-types";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    var imageName = require("./images/img-01.png");
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src={imageName} alt="IMG" />
            </div>

            <form
              class="login100-form validate-form"
              onSubmit={e => this.props.handle_signup(e, this.state)}
            >
              <span class="login100-form-title">Register Users</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={this.handle_change}
                />
                <span class="focus-input100" />
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  class="input100"
                  type="password"
                  name="password"
                  onChange={this.handle_change}
                  placeholder="Password"
                />
                <span class="focus-input100" />
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div class="container-login100-form-btn">
                <input
                  type="submit"
                  class="login100-form-btn"
                  value="Register"
                />
              </div>

              <div class="text-center p-t-136">
                <a class="txt2" href="#">
                  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
