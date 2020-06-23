import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseQty,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeItem, addItem, decreaseQty }) => {
  const { id, name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQty(id)}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItem(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id)),
    addItem: (id) => dispatch(addItem(id)),
    decreaseQty: (id) => dispatch(decreaseQty(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
