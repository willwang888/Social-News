import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(createStackNavigator(
  {
    Main: MainTabNavigator,
    Auth: { screen: AuthNavigator },
  },
  {
    initialRouteName: 'Auth',
  }
));
