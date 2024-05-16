import axios from 'axios';

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

const users = axios.create(defaultOptions);

users.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
export default users;
