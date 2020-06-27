import React from "react";
import "./cart-item.styles.scss";
const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="cart-item-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
