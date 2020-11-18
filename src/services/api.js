import axios from 'axios'

const createAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL 
  });

export const fetchProducts = async ()=>{
    const {data} = await createAxios().get('/posts');
    return data
}