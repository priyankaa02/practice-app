const name = 'common';

export const types = {
  FETCH_NATIONALITY: `${name}/FETCH_NATIONALITY`,
  NATIONALITY_RESPONSE: `${name}/NATIONALITY_RESPONSE`,
  FETCH_EMPLOYEE_DETAIL: `${name}/FETCH_EMPLOYEE_DETAIL`,
  EMPLOYEE_DETAIL_RESPONSE: `${name}/EMPLOYEE_DETAIL_RESPONSE`,
  FETCH_SPECIALIZATION: `${name}/FETCH_SPECIALIZATION`,
  SPECIALIZATION_RESPONSE: `${name}/SPECIALIZATION_RESPONSE`,
  FETCH_JOB_TYPE: `${name}/FETCH_JOB_TYPE`,
  JOB_TYPE_RESPONSE: `${name}/JOB_TYPE_RESPONSE`,
  FETCH_INDUSTRY: `${name}/FETCH_INDUSTRY`,
  INDUSTRY_RESPONSE: `${name}/INDUSTRY_RESPONSE`,
  FETCH_VISA_STATUS: `${name}/FETCH_VISA_STATUS`,
  VISA_STATUS_RESPONSE: `${name}/VISA_STATUS_RESPONSE`,
  FETCH_APPLICATION_STATUS: `${name}/FETCH_APPLICATION_STATUS`,
  APPLICATION_STATUS_RESPONSE: `${name}/APPLICATION_STATUS_RESPONSE`,
};

export const actions = {
  fetchNationality: () => ({
    type: types.FETCH_NATIONALITY,
  }),
  nationalityResponse: response => ({
    type: types.NATIONALITY_RESPONSE,
    payload: response,
  }),
  fetchEmployeeDetail: () => ({
    type: types.FETCH_EMPLOYEE_DETAIL,
  }),
  employeeDetailResponse: response => ({
    type: types.EMPLOYEE_DETAIL_RESPONSE,
    payload: response,
  }),
  fetchJobType: () => ({
    type: types.FETCH_JOB_TYPE,
  }),
  jobtypeResponse: response => ({
    type: types.JOB_TYPE_RESPONSE,
    payload: response,
  }),
  fetchSpecialization: () => ({
    type: types.FETCH_SPECIALIZATION,
  }),
  specializationResponse: response => ({
    type: types.SPECIALIZATION_RESPONSE,
    payload: response,
  }),
  fetchIndustry: () => ({
    type: types.FETCH_INDUSTRY,
  }),
  industryResponse: response => ({
    type: types.INDUSTRY_RESPONSE,
    payload: response,
  }),
  fetchVisaStatus: () => ({
    type: types.FETCH_VISA_STATUS,
  }),
  visaStatusResponse: response => ({
    type: types.VISA_STATUS_RESPONSE,
    payload: response,
  }),
  fetchApplicationStatus: () => ({
    type: types.FETCH_APPLICATION_STATUS,
  }),
  applicationStatusResponse: response => ({
    type: types.APPLICATION_STATUS_RESPONSE,
    payload: response,
  }),
};

export const selectors = {
  selectNationality: state => state[name].nationality,
  selectJobType: state => state[name].jobType,
  selectSpecialization: state => state[name].specialization,
  selectIndustry: state => state[name].industry,
  selectVisaStatus: state => state[name].visaStatus,
  selectEmployeeDetail: state => state[name].employeeDetail,
  selectApplicationStatus: state => state[name].applicationStatus,
};

const initialState = {
  nationality: '',
  jobType: '',
  industry: '',
  visaStatus: '',
  applicationStatus: '',
  specialization: '',
  employeeDetail: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NATIONALITY:
    case types.FETCH_EMPLOYEE_DETAIL:
    case types.FETCH_INDUSTRY:      
    case types.FETCH_JOB_TYPE:
    case types.FETCH_SPECIALIZATION:    
    case types.FETCH_APPLICATION_STATUS:
    case types.FETCH_VISA_STATUS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.NATIONALITY_RESPONSE: {
      return {...state, nationality: action.payload};
    }
    case types.SPECIALIZATION_RESPONSE: {
        return {...state, specialization: action.payload};
    }
    case types.EMPLOYEE_DETAIL_RESPONSE: {
        return {...state, employeeDetail: action.payload};
    }
    case types.INDUSTRY_RESPONSE: {
      return {...state, industry: action.payload};
    }
    case types.JOB_TYPE_RESPONSE: {
      return {...state, jobType: action.payload};
    }  
    case types.VISA_STATUS_RESPONSE: {
        return {...state, visaStatus: action.payload};
    }
    case types.APPLICATION_STATUS_RESPONSE: {
        return {...state, applicationStatus: action.payload};
    }    
    default:
      return state;
  }
};
