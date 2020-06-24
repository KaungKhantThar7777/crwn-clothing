import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful");
};
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey =
    "pk_test_51GxPy7BMmNF7e899tXTrH6gPLZ00UvXSmp5GrmLekyCY9i00aTwMXqIHWjWUBLwQiDPVpAMCt3BbzAfGWlw7NRoI00rnGy3DzH";

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
