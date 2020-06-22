import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.styles.scss";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };
  render() {
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
              onClick={SignInWithGoogle}
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

export default SignIn;
