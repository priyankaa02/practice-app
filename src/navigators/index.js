import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {setTopLevelNavigator} from './NavigationService';
import ScreenNames from './ScreenNames';
import {ScreenPaths} from './ScreenPaths';

const AppNavigator = createStackNavigator(
  {
    ...ScreenPaths,
  },
  {
    mode: 'modal',
    initialRouteName: ScreenNames.SplashContainer,
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null,
      title: '',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const EnhancedAppContainer = () => {
    return (
      <AppContainer
        ref={navigatorRef => {
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  };
  
  export default EnhancedAppContainer;
