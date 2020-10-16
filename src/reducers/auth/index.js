const name = 'auth';

export const types = {
  SIGN_IN_REQUEST: `${name}/SIGN_IN_REQUEST`,
  SIGN_IN_RESPONSE: `${name}/SIGN_IN_RESPONSE`,
  SET_LOADING: `${name}/SET_LOADING`,
  SET_ERRMSG: `${name}/SET_ERRMSG`,
};

export const actions = {
  loginRequest: (email, password) => ({
    type: types.SIGN_IN_REQUEST,
    payload: {email, password}
  }),
  setLoginResponse: response => ({
    type: types.SIGN_IN_RESPONSE,
    payload: response,
  }),
  setErrMsg: m => ({
    type: types.SET_ERRMSG,
    payload: m,
  }),
  setLoading: bool => ({
    type: types.SET_LOADING,
    payload: {loading: bool},
  }),
};

export const selectors = {
  selectAuthResponse: state => state[name].authResponse,
  selectLoading: state => state[name].loading,
  selectErrMsg: state => state[name].errMsg,
};

const initialState = {
  authResponse: '',
  loading: false,
  errMsg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
    case types.SET_LOADING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.SIGN_IN_RESPONSE: {
      return {...state, authResponse: action.payload};
    }
    case types.SET_ERRMSG: {
      return {...state, errMsg: action.payload};
    }
    default:
      return state;
  }
};
