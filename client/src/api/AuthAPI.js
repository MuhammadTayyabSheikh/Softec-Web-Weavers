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
    .then((res) => res.data);
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

const logout = () => {
  localStorage.removeItem('token');
};

export { register, login, logout };
