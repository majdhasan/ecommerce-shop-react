import axios from 'axios';

const createAxios = () => {
  const params = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:1337',
  };
  return axios.create(params);
};

export const fetchProducts = async (query = '') => {
  const url = query ? '/products?' + query : '/products';
  const { data } = await createAxios().get(url);
  return data;
};

export const fetchProduct = async (productId) => {
  const { data } = await createAxios().get(`/products/${productId}`);
  return data;
};

export const createOrder = async (order) => {
  const { data } = await createAxios().post(`/orders`, order);
  return data;
};
