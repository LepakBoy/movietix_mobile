import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosApiIntaces = axios.create({
  baseURL: 'http://192.168.100.4:3000',
});

const setToken = async (token, refreshToken) => {
  try {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {}
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
  } catch (error) {}
};

axiosApiIntaces.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('token');
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

axiosApiIntaces.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (error.response.status === 403) {
      if (
        error.response.data.msg ===
        'your session has expired, please login again'
      ) {
        axiosApiIntaces
          .post('auth/refresh', {refreshToken})
          .then(res => {
            setToken(res.data.data.token, res.data.data.refreshToken);
          })
          .catch(err => {
            removeToken();
          });
      } else {
        removeToken();
      }
    }
    return Promise.reject(error);
  },
);

export default axiosApiIntaces;
