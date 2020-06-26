import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user.actions";

import "./signin.styles.scss";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { emailSigninStart } = this.props;
    const { email, password } = this.state;

    emailSigninStart(email, password);
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSigninStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            required
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
          />

          <FormInput
            name="password"
            type="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
          />
          <div className="button-container">
            <CustomButton type="submit" value="Submit">
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSigninStart}
              isGoogleSignin
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
