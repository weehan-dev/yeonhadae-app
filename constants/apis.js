import axios from 'axios';

const API_URL = 'http://2849a17c.ngrok.io';

export const endPoints = {
  login: '/accounts/login/',
  signup: '/accounts/signup/',
  checkToken: '/accounts/checkToken/'
};

export const loginApi = axios.create({
  baseURL: API_URL
});

export default axios.create({
  baseURL: API_URL
});