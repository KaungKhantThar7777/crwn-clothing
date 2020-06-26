import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
