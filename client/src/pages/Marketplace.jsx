import React from 'react';
import { Filters, Results, Search } from '../components/marketplace';

function Marketplace(props) {
  return (
    <div className='px-5 background-dark pb-10 pt-5'>
      <div className='row'>
        <Search />
        <Filters />
        <Results />
      </div>
    </div>
  );
}

export default Marketplace;
