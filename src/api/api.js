import * as axios from 'axios';
import { toast } from 'react-toastify';

export const baseURL = "https://pickbazar.batarin.dev";
export const instance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    toast.error('error occured');
    return Promise.reject(error);
  },
);
