const initalState = {
  user: {},
  isLoading: false,
  isError: false,
};

const user = (state = initalState, action) => {
  switch (action.type) {
    case 'USERBYID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'USERBYID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data[0],
      };
    }
    case 'USERBYID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
