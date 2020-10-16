import React, {useEffect, useState} from 'react';
import Login from '../../components/Login';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {selectors as authSelectors, actions as authActions} from '../../reducers/auth'


const LoginContainer = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const loading = useSelector(authSelectors.selectLoading)
  const errMsg = useSelector(authSelectors.selectErrMsg)

  const onChangeUserName = (name) => {
    setUserName(name)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onPressSignIn = () => {
    dispatch(authActions.loginRequest(username, password))
    // navigateAndReset(ScreenNames.HomeContainer)
  }

  return (
      <Login
        username={username}
        password={password}
        onChangeUserName={onChangeUserName}
        onChangePassword={onChangePassword}
        loading={loading}
        errMsg={errMsg}
        onPressSignIn={onPressSignIn}
      />
  );
};

export default LoginContainer;
