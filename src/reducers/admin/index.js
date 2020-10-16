const name = 'admin';

export const types = {
  FETCH_ALL_REQUEST: `${name}/FETCH_ALL_REQUEST`,
  FETCH_ALL_RESPONSE: `${name}/FETCH_ALL_RESPONSE`,
  FETCH_EMPLOYER: `${name}/FETCH_EMPLOYER`,
  EMPLOYER_RESPONSE: `${name}/EMPLOYER_RESPONSE`,
  FETCH_EMPLOYEE: `${name}/FETCH_EMPLOYEE`,
  EMPLOYEE_RESPONSE: `${name}/EMPLOYEE_RESPONSE`,
  SET_LOADING: `${name}/SET_LOADING`,
  SET_ERRMSG: `${name}/SET_ERRMSG`,
  SET_TOTAL: `${name}/SET_TOTAL`
};

export const actions = {
  fetchAllRequest: () => ({
    type: types.FETCH_ALL_REQUEST,
  }),
  fetchAllResponse: response => ({
    type: types.FETCH_ALL_RESPONSE,
    payload: response,
  }),
  fetchEmployer: (id) => ({
    type: types.FETCH_EMPLOYER,
    payload: {id}
  }),
  employerResponse: response => ({
    type: types.EMPLOYER_RESPONSE,
    payload: response,
  }),
  fetchEmployee: (id) => ({
    type: types.FETCH_EMPLOYEE,
    payload: {id}
  }),
  setTotal: (total) => ({
    type: types.SET_TOTAL,
    payload: total
  }),
  employeeResponse: response => ({
    type: types.EMPLOYEE_RESPONSE,
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
  selectAllResponse: state => state[name].allData,
  selectEmployee: state => state[name].employee,
  selectEmployer: state => state[name].employer,
  selectLoading: state => state[name].loading,
  selectErrMsg: state => state[name].errMsg,
  selectTotal: state => state[name].total,
};

const initialState = {
  allData: '',
  employee: '',
  employer: '',
  loading: false,
  errMsg: null,
  total: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMPLOYER:
    case types.FETCH_EMPLOYEE:      
    case types.FETCH_ALL_REQUEST:
    case types.SET_LOADING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.FETCH_ALL_RESPONSE: {
      return {...state, allData: action.payload};
    }
    case types.EMPLOYEE_RESPONSE: {
      return {...state, employee: action.payload};
    }
    case types.EMPLOYER_RESPONSE: {
      return {...state, employer: action.payload};
    }  
    case types.SET_TOTAL: {
      return {...state, total: action.payload};
    }  
    case types.SET_ERRMSG: {
      return {...state, errMsg: action.payload};
    }
    default:
      return state;
  }
};
