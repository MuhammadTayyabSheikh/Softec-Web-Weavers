import { useState } from 'react';
import axios from './axios.config';
import io from 'socket.io-client';

let socket;

const register = async ({ name, email, password, dob, gender }) => {
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
    });
};

const login = async ({ email, password }) => {
  return axios
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token);

      socket = io('http://localhost:5000', {
        query: {
          token: res.data.token,
        },
      });

      return res.data;
    });
};
const isLoggedIn = () => {
  return localStorage.getItem('token') ? true : false;
};

const logout = () => {
  localStorage.removeItem('token');
  socket.disconnect();
};

export { register, login, logout, socket, isLoggedIn };
