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
  import {types as adminTypes, actions as adminActions} from './index';
  import {fetchApi} from '../../api';
  import {URL} from '../../constants';
  import {navigate, navigateAndReset} from '../../navigators/NavigationService';
  import ScreenNames from '../../navigators/ScreenNames';
  
  function* fetchAllRequest() {
    yield put(adminActions.setLoading(true));
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.FETCH_ALL_USER,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        yield adminActions.setErrMsg('timeout');
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        const total = result.employee.length + result.employer.length
        console.log('result result', result)
        yield put(adminActions.fetchAllResponse(result));
        yield put(adminActions.setTotal(total))
        // navigateAndReset(ScreenNames.ListContainer)
      }
      yield put(adminActions.setLoading(false));
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.data ? e.err.data.result : 'unknown error';
      yield put(adminActions.setErrMsg(errMsg));
      yield put(adminActions.setLoading(false));
      Alert.alert('unknown error');
    }
  }

  function* fetchEmployer(actionObj) {
    const {id} = actionObj.payload  
    yield put(adminActions.setLoading(true));
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.FETCH_EMPLOYER + '?id='+id,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        yield adminActions.setErrMsg('timeout');
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        yield put(adminActions.employerResponse(result));
        navigate(ScreenNames.EmployerDetailContainer)
      }
      yield put(adminActions.setLoading(false));
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e  ?  e : 'unknown error';
      yield put(adminActions.setErrMsg(errMsg));
      yield put(adminActions.setLoading(false));
      Alert.alert('unknown error');
    }
  }

  function* fetchEmployee(actionObj) {
    const {id} = actionObj.payload  
    console.log('employee id', id)
    yield put(adminActions.setLoading(true));
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.FETCH_EMPLOYEE + '?id='+id,
          method: 'GET',
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        yield adminActions.setErrMsg('timeout');
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {result} = responseJson;
        yield put(adminActions.employeeResponse(result));
        navigate(ScreenNames.EmployeeDetailContainer)
      }
      yield put(adminActions.setLoading(false));
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e  ?  e : 'unknown error';
      yield put(adminActions.setErrMsg(errMsg));
      yield put(adminActions.setLoading(false));
      Alert.alert('unknown error');
    }
  }
  
  export default [
    takeLatest(adminTypes.FETCH_ALL_REQUEST, fetchAllRequest),
    takeLatest(adminTypes.FETCH_EMPLOYEE, fetchEmployee),
    takeLatest(adminTypes.FETCH_EMPLOYER, fetchEmployer)
  ];
  