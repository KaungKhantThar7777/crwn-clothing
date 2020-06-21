import React from "react";

import "./form-input.styles.scss";
function FormInput({ label, handleChange, ...other }) {
  return (
    <div className="group">
      <input className="form-input" {...other} onChange={handleChange} />
      {label && (
        <label className={`${other.value.length && "shrink"} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
