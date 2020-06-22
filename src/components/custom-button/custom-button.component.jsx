import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignin, ...other }) {
  return (
    <div className="btn-container">
      <button
        className={`${isGoogleSignin && "google"} custom-button`}
        {...other}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
