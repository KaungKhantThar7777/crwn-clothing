import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user.actions";

import "./signin.styles.scss";
const SignIn = ({ emailSigninStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    emailSigninStart(email, password);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          required
          handleChange={handleChange}
          value={email}
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          required
          handleChange={handleChange}
          value={password}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
