import * as Type from '../Constant/type';

interface AuthLogin {
  loading: boolean;
  isLogined: boolean;
  error: boolean;
  isRegister: boolean;
}

const initialState: AuthLogin = {
  loading: false,
  isLogined: false,
  isRegister: false,
  error: false,
};
const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
  case 'USER_LOGIN_REQUEST': {
    return {
      ...state,
      loading: true,
    };
  }

  case 'USER_LOGIN_SUCCESS': {
    return {
      ...state,
      loading: false,
      isLogined: action.payload ? true : false,
      error: false,
    };
  }

  case 'USER_LOGIN_FAILED': {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }

  case Type.USER_REGISTER_REQUEST:
    return {
      ...state,
      loading: true,
    };

  case Type.USER_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      isRegister: true,
    };

  case Type.USER_REGISTER_FAILED: {
    return {
      ...state,
      error: true,
    };
  }

  default:
    return {
      ...state,
    };
  }
};

export default AuthReducer;
