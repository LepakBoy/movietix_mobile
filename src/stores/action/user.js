import axios from '../../utils/axios';

export const getUser = id => {
  return {
    type: 'USERBYID',
    payload: axios.get(`/user/${id}`),
  };
};

export const updateUser = data => {
  return {
    type: 'UPDATEPROFILE',
    payload: axios.patch('/user/update-profile', data),
  };
};
