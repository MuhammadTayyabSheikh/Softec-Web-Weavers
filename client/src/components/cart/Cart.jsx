import React from 'react';
import { cardData } from '../../constants';
import { CartCard } from '../partials';
import StripeCheckout from 'react-stripe-checkout';

function Cart(props) {
  const handleToken = async (token) => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          amount,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      onPaymentSuccess();
    } catch (error) {
      onPaymentError(error.message);
    }
  };

  return (
    <div className='row pt-5'>
      <div className='col-12'>
        <h1 className='font-clash text-white mb-5'>
          My <span className='text-gradient'>Cart</span>
        </h1>
      </div>
      <div className='col-6'>
        {cardData?.map((product, key) => (
          <CartCard product={product} key={key} />
        ))}
      </div>
      <div className='col-1'></div>
      <div className='col-5 background-gray rounded-border p-5 h-100 sticky-lg-top'>
        <div className='row'>
          <div className='col-12'>
            {' '}
            <h1 className='font-clash paraColor'>Total</h1>
          </div>
          <div className='col-12'>
            <hr className='background-secondary' />
          </div>
          <div className='col-6'>
            <h5 className='font-clash paraColor'>Sub-Total: </h5>
          </div>
          <div className='col-6'>
            <h5 className='font-clash paraColor'>PKR 13456.88</h5>
          </div>
          <div className='col-12'>
            <hr className='background-secondary' />
          </div>
          <div className='col-12 mt-3'>
            <StripeCheckout
              name='Game Hub'
              description={`Payment of PKR 2000`}
              amount={2000} // Stripe expects amount in cents
              currency='PKR'
              stripeKey={
                'pk_test_51Lcpl3Bf25LGtW9hgC4vbqmIkGB7MVf88laSzw1vmZee97kMYpPa3HU3BnUbs3XcHbR79wjJBlv6sYN8UvOz6rcD00cFqXZ9Xi'
              }
              token={handleToken}
              shippingAddress
              billingAddress
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
