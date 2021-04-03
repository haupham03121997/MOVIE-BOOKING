import axios from 'axios';

const { REACT_APP_API_HOST } = process.env;
const axiosClient = axios.create({
  baseURL:`${REACT_APP_API_HOST}`,
});

axiosClient.interceptors.request.use((config) => {
  const userInfo = 1;

  if (config) {
    config.headers.Authorization = `Baear ${userInfo}`;
  }

  return config;
});

export default axiosClient;


