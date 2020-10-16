import React, {useEffect} from 'react';
import Splash from '../../components/Splash';
import SplashScreen from 'react-native-splash-screen';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import { selectors as authSelectors } from '../../reducers/auth'


const SplashContainer = () => {
  const authResponse = useSelector(authSelectors.selectAuthResponse);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authResponse) {
      navigateAndReset(ScreenNames.HomeContainer);
    } else {
      navigateAndReset(ScreenNames.LoginContainer);
    }
    // setTimeout(() => SplashScreen.hide(), 1000);
  }, [authResponse]);
  return <Splash />;
};

export default SplashContainer;
