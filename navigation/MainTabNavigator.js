import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EntryScreen from '../screens/EntryScreen';

const SocialStack = createStackNavigator({
  Home: HomeScreen,
});

SocialStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title="Social" focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ExploreStack = createStackNavigator(
  {
    Feed: LinksScreen,
    Articles: ArticlesScreen,
    Entry: EntryScreen,
  },
  {
    initialRouteName: 'Feed',
  }
);

ExploreStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title="Explore" focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Profile',
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title="Profile" focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    SocialStack,
    ExploreStack,
    ProfileStack,
  },
  {
    initialRouteName: 'ProfileStack',
  }
);
