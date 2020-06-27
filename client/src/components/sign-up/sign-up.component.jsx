import React, { useState } from "react";
import { connect } from "react-redux";
import { signupStart } from "../../redux/user/user.actions";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

const Signup = ({ signupStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    signupStart(email, password, displayName);
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account.</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit} method="post">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signupStart: (email, password, displayName) =>
    dispatch(signupStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
