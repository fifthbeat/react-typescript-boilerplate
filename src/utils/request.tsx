import axios from 'axios';

import {API_URL} from '../constants/endpoint';

const CancelToken = axios.CancelToken;

export const getCancelToken = () => {
  return CancelToken.source();
};

export const isCancelled = (error: object) => {
  return axios.isCancel(error);
};

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const update = async (url: string, data: object, options: object) =>
  await http
    .put(url, {
      ...options
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });

export const post = async (
  url: string,
  options: {
    headers: {};
    body: {};
  }
) =>
  await http
    .post(url, options.body, {headers: options.headers})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });

export const get = async (url: string, options: object) =>
  await http
    .get(url, {
      ...options
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });

// INFO: Enable these to debug requests
// http.interceptors.request.use((request) => {
//   if (request && request.method) {
//     console.log('Axios', `[${request.method.toUpperCase()}]`, request.url, request.params, request);
//     console.log(request);
//   }
//   return Promise.resolve(request);
// });

// http.interceptors.response.use((response) => {
//   console.log(response.data);
//   return Promise.resolve(response);
// });
