import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Checkout = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   axios.post("http://localhost:5000/create-payment-intent", { amount: 1000 })
  //     .then(data => {
  //       setClientSecret(data.data.clientSecret);
  //     });
  // }, []);

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        disabled={processing || disabled || succeeded}
        type="submit"
      >
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Checkout;