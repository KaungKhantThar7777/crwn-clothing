import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import "./collectionItem.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const collectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(collectionItem);
