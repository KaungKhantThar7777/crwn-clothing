import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, ...other }) {
  return (
    <div className="btn-container">
      <button className="custom-button" {...other}>
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
