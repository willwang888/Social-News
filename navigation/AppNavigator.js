import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainTabNavigator,
    Auth: { screen: AuthNavigator },
  },
  {
    initialRouteName: 'Auth',
  }
));
