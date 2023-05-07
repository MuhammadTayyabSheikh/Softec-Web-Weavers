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
  Profile,
  SignUp,
} from '../pages';
import Orders from '../pages/Orders';

const ClientRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/browse' element={<Marketplace />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRouter;
