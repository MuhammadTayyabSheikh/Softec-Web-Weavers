import React from 'react';
import { cardData } from '../../constants';
import { CartCard } from '../partials';

function Cart(props) {
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
            <button className='btn btn-lg background-secondary rounded-pill w-100'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
