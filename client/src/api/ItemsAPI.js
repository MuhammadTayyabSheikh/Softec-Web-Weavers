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

const createItem = async ({type, title, description, marketPrice, costPrice, stock, minAge, category, image}) => {
  console.log({type, title, description, marketPrice, costPrice, stock, minAge, category})
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('marketPrice', marketPrice);
    formData.append('costPrice', costPrice);
    formData.append('stock', stock);
    formData.append('minAge', minAge);
    formData.append('category', category);
    formData.append('image', image);

    const res = await axios.post('/items/' + type, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('items/createItem res: ', res);
    return res.data;
  } catch (error) {
    console.log('items/createItem error: ', error);
    return error;
  }
};

export { getGames, getGear, createItem };
