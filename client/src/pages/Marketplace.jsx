import React, { useEffect, useState } from 'react';
import { Filters, Results, Search } from '../components/marketplace';
import { useLocation } from 'react-router-dom';

function Marketplace(props) {
  const { state } = useLocation();
  const [price, setPrice] = useState({
    min: 0,
    max: 100000,
  });

  const [categories, setCategories] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');

  useEffect(() => {
    if (state.type) {
      // do update type
    }
    if (state.category) {
      setCategories([state.category]);
    }
  }, [state]);

  return (
    <div className='px-5 background-dark pb-10 pt-5'>
      <div className='row'>
        <Search />
        <Filters
          price={price}
          setPrice={setPrice}
          categories={categories}
          setCategories={setCategories}
        />
        <Results />
      </div>
    </div>
  );
}

export default Marketplace;
