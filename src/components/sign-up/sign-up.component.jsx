import React, { Component } from "react";
import { connect } from "react-redux";
import { signupStart } from "../../redux/user/user.actions";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

class Signup extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    const { signupStart } = this.props;
    signupStart(email, password, displayName);
  };
  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account.</h2>
        <span>Sign Up with email and password</span>
        <form onSubmit={this.handleSubmit} method="post">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signupStart: (email, password, displayName) =>
    dispatch(signupStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
