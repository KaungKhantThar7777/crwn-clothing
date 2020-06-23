import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, inverted, isGoogleSignin, ...other }) {
  return (
    <div className="btn-container">
      <button
        className={`${inverted && "inverted"} ${
          isGoogleSignin && "google"
        } custom-button`}
        {...other}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
