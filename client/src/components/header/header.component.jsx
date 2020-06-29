import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signoutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
const Header = ({ currentUser, hidden, signoutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signoutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <Cart />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signoutStart: () => dispatch(signoutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
