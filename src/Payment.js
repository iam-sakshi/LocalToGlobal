import React, { useContext,useHistory} from 'react';
import { CartContext } from './CartContext';
import  {Sliderbar}  from './Sliderbar';
import { loadStripe } from "@stripe/stripe-js";
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "babel-extract-comments/axios";

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { totalPrice } = useContext(CartContext);

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/charge", { id, amount:{totalPrice} });
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
   <div className="crd err">
  <Sliderbar/>
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    ><img src="asserts/pay.png"/>
    <div className="py">
      <CardElement />
      <button type="submit" className="primary btn" disabled={!stripe}>
        Pay
      </button>
      </div>
    </form>
    </div>
  );
};
const stripePromise = loadStripe("pk_test_51I7w5kLA2y1TfdSXHYsv2iVWnckcknLyJoFAzqIYSeIr6TpwlVQxR1zk8f5JjRJs1zF6HzPh3w4KJfSxhH7VqW8N00MTx8Um8g");

const Payment = (props) => {
  const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default Payment;