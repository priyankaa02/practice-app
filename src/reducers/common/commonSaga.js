import {
    takeLatest,
    fork,
    select,
    call,
    put,
    take,
    delay,
    race,
  } from 'redux-saga/effects';
  import { Alert } from 'react-native';
  import {types as commonTypes, actions as commonActions} from './index';
  import {fetchApi} from '../../api';
  import {URL} from '../../constants';
  
  function* fetchNationality() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.NATIONALITY,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.nationalityResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

  
  function* fetchIndustry() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.INDUSTRY,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.industryResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

  
  function* fetchJobType() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.JOB_TYPE,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.jobtypeResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

    
  function* fetchVisaStatus() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.VISA_STATUS,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.visaStatusResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

    
  function* fetchApplicationStatus() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.APPLICATION_STATUS,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.applicationStatusResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

  function* fetchSpecialization() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.SPECIALIZATION,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.specializationResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }

  function* fetchEmployeeDetail() {
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.LIST_EMPLOYEE_DETAIL,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        console.log('result result', result)
        yield put(commonActions.employeeDetailResponse(result));
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.result ? e.err.result : 'unknown error';
      Alert.alert('unknown error');
    }
  }
  
  export default [
    takeLatest(commonTypes.FETCH_NATIONALITY, fetchNationality),
    takeLatest(commonTypes.FETCH_INDUSTRY, fetchIndustry),
    takeLatest(commonTypes.FETCH_JOB_TYPE, fetchJobType),
    takeLatest(commonTypes.FETCH_VISA_STATUS, fetchVisaStatus),
    takeLatest(commonTypes.FETCH_SPECIALIZATION, fetchSpecialization),
    takeLatest(commonTypes.FETCH_EMPLOYEE_DETAIL, fetchEmployeeDetail),
    takeLatest(commonTypes.FETCH_APPLICATION_STATUS, fetchApplicationStatus)
  ];
  