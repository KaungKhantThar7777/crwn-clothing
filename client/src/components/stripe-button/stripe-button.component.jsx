import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey =
    "pk_test_51GxPy7BMmNF7e899tXTrH6gPLZ00UvXSmp5GrmLekyCY9i00aTwMXqIHWjWUBLwQiDPVpAMCt3BbzAfGWlw7NRoI00rnGy3DzH";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        console.log(res);
        alert("Payment Successful");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There was an error with payment.Please sure you use provided cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total payment is $${price}`}
      amount={priceForStripe}
      paneLabel="Pay Now Again"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
