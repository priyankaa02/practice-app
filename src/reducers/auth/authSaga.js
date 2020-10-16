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
  import {types as authTypes, actions as authActions} from './index';
  import {actions as adminActions} from '../admin';
  import {fetchApi} from '../../api';
  import {URL} from '../../constants';
  import {navigateAndReset} from '../../navigators/NavigationService';
  import ScreenNames from '../../navigators/ScreenNames';
  
  function* signIn(actionObj) {
    yield put(authActions.setLoading(true));
    const {email, password} = actionObj.payload
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.LOGIN,
          method: 'POST',
          data: {
            email: email,
            password: password,
            role: "3",
          },
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        yield authActions.setErrMsg('timeout');
        yield put(authActions.setLoading(false));
        console.log('timeout');
        Alert.alert("timeout");
      } else {
        console.log('responseJson', responseJson);
        const {data} = responseJson;
        yield put(authActions.setLoginResponse(data));
        yield put(authActions.setLoading(false));
        yield put(adminActions.fetchAllRequest())
        navigateAndReset(ScreenNames.HomeContainer)
      }
    } catch (e) {
      console.log('error', e);
      const errMsg =
        e && e.err.data ? e.err.data.result : 'unknown error';
      yield put(authActions.setErrMsg(errMsg));
      yield put(authActions.setLoading(false));
      Alert.alert('unknown error');
    }
  }
  
  export default [
    takeLatest(authTypes.SIGN_IN_REQUEST, signIn),
  ];
  