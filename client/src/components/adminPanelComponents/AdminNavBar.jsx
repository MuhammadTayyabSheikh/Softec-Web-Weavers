import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks } from '../../constants';
import { CartFill, ChevronDown, Heart, HeartFill } from 'react-bootstrap-icons';
import { logo } from '../../assets';

function AdminNavBar(props) {
  return (
    <nav className='sticky-top w-100 py-3 navbar navbar-expand-lg background-dark w-100' style={{display: 'flex', alignItemsCenter: 'center', justifyContent: 'space-between'}}>
      <Link to={'/'}>
        <img
          src={logo}
          alt=''
          width={'200px'}
          className='img-fluid pulse d-none d-lg-inline'
        />
        <img
          src={logo}
          alt=''
          width={'150px'}
          className='img-fluid pulse d-inline d-lg-none'
        />
      </Link>

      <Link to={'/login'} className='' id='navbarNav'>
        <button className='btn btn-sm background-secondary rounded-pill px-4 py-2 text-white'>
          logout
        </button>
      </Link>
    </nav>
  );
}

export default AdminNavBar;
