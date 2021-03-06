import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}

      <div className="total">Total: ${total}</div>

      <div className="test-warning">
        *Please use test credit card number
        <br />
        4242 4242 4242 4242 Exp- 01/21 CSV-123
      </div>
      <div className="btn-container">
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
