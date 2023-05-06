import React, { useState, useEffect } from 'react';
import { cardData } from '../../constants';
import { Card } from '../partials';

function Results(props) {
  return (
    <div className='col-12 col-lg-9 px-0 px-lg-3'>
      <div className='row'>
        {cardData.map((product, key) => (
          <div className='col-12 col-md-6 col-lg-4 mb-4' key={key}>
            <Card
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
