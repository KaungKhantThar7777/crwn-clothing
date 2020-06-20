import React from "react";
import "./Card.styles.css";

export const Card = (props) => {
  return (
    <div className="Card">
      <img
        alt="monster"
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      />
      <h3>{props.name}</h3>
      <h5>{props.email}</h5>
    </div>
  );
};
