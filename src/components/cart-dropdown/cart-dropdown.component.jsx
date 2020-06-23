import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default Cart;
