import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from '../components/partials';
import {
  CartPage,
  FavoritesPage,
  Home,
  Login,
  Marketplace,
  ProductPage,
  SignUp,
} from '../pages';

const ClientRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/browse' element={<Marketplace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRouter;
