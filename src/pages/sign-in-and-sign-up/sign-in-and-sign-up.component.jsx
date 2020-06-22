import React from "react";

import SignIn from "../../components/signin/signin.component";
import Signup from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";
const SignInUp = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInUp;
