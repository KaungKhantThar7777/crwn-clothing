import React from "react";
import "./SearchBox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="SearchBox">
      <input placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};
