import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
