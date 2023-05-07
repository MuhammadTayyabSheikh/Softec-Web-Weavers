import React, { useState } from 'react';
import { Filters, Results, Search } from '../components/marketplace';

function Marketplace(props) {
  const [price, setPrice] = useState({
    min: 0,
    max: 100000,
  });

  const [categories, setCategories] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');

  return (
    <div className='px-5 background-dark pb-10 pt-5'>
      <div className='row'>
        <Search />
        <Filters price={price} setPrice={setPrice} categories={categories} setCategories={setCategories} />
        <Results />
      </div>
    </div>
  );
}

export default Marketplace;
