import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from '../components/Partials';
import { Home, Login, SignUp } from '../pages';

const ClientRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default ClientRouter