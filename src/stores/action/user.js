import axios from '../../utils/axios';

export const getUser = id => {
  return {
    type: 'USERBYID',
    payload: axios.get(`/user/${id}`),
  };
};
