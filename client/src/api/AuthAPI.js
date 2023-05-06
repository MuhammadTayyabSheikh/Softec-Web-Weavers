import { useState } from 'react';
import axios from './axios.config';

const register = ({ name, email, password, dob, gender }) => {
  return axios
    .post('/auth/register', {
      name,
      email,
      password,
      dob,
      gender,
    })
    .then((res) => {
      console.log(res.data);
    }

    );
};

const login = ({ email, password }) => {
  return axios
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data;
    });
};
const isLoggedIn = () => {
  return localStorage.getItem('token') ? true : false;
};

const logout = () => {
  localStorage.removeItem('token');
  console.log('tokenjfewhcevbk')
};

export { register, login, logout, isLoggedIn };
