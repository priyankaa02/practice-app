/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  Alert,
} from 'react-native';

import EnhancedAppContainer from './navigators';
import {configureStore} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Splash from './components/Splash';
import * as Font from 'expo-font';
import firebase from 'react-native-firebase';

let customFonts = {
  'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
  'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
  'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
};

const App = () => {
  const [store, persistor] = configureStore();

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
  }

  useEffect(() => {
    _loadFontsAsync()
    checkPermission();
    messageListener();
  })

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        getFcmToken();
    } else {
        requestPermission();
    }
  }

  const getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      showAlert('Your Firebase Token is:', fcmToken);
    } else {
      showAlert('Failed', 'No token received');
    }
  }

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
    } catch (error) {
        // User has rejected permissions
    }
  }

  const messageListener = async () => {
    const notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        showAlert(title, body);
    });
  
    const notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        showAlert(title, body);
    });
  
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        showAlert(title, body);
    }
  
    messageListener = firebase.messaging().onMessage((message) => {
      console.log(JSON.stringify(message));
    });
  }

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Splash />}>
        <StatusBar hidden />
        <EnhancedAppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
