import React from 'react';
import { ChevronDown, ChevronUp, X } from 'react-bootstrap-icons';

function CartCard({ product }) {
  return (
    <>
      <div
        className='row mt-3 p-2 rounded-border'
        style={{ position: 'relative' }}
      >
        <div className='col-4'>
          <img
            src={`${product.image}`}
            alt=''
            className='rounded'
            height={'150px'}
          />
        </div>
        <div className='col-8 my-auto'>
          <h3 className='font-clas paraColor'>{product.name}</h3>
          <p className='secondary'>PKR 232.00</p>
          <div className='d-flex gap-3'>
            <p className='paraColor'>Quantity: 237</p>
            <div className='d-flex flex-column ml-2'>
              <ChevronUp color='#858584' size={"10px"}/>
              <ChevronDown color='#858584' size={"10px"}/>
            </div>
          </div>
        </div>
        <X
          color='#fff'
          size={'30px'}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        />
      </div>
      <hr className='background-gray' />
    </>
  );
}

export default CartCard;
