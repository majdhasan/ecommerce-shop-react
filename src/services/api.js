import axios from 'axios';

const createAxios = () => {
  const params = {
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:1337",
  };
  return axios.create(params);
};

export const fetchProducts = async () => {
  const { data } = await createAxios().get('/products');
  return data;
};
