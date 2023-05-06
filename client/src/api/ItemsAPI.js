import { useState } from 'react';
import axios from './axios.config';

const getGames = () => {
  return axios
    .get('/items/VideoGame')
    .then((res) => {
      console.log(res.data);
      return res.data;
    }
    );
};

const getGear = () => {
  return axios
    .get('/items/GamingGear')
    .then((res) => {
      console.log(res.data);
      return res.data;
    }
    );
};

export { getGames, getGear };
