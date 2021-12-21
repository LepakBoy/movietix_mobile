const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  idUser: '',
  isError: false,
  isLoading: false,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        email: action.payload.data.data.email,
        idUser: action.payload.data.data.id_user,
        firstName: action.payload.data.data.first_name,
        lastName: action.payload.data.data.last_name,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default register;
