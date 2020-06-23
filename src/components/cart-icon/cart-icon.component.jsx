import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import toggleHidden from "../../redux/cart/cart.actions";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 20 </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
