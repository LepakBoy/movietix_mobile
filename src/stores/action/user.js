import axios from '../../utils/axios';

export const user = id => {
  return {
    type: 'USERBYID',
    payload: axios.get(`/user/${id}`),
  };
};
