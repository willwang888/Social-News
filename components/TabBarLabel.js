import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: 'center',
    color: Colors.tabIconDefault,
  },
  tabBarLabelActive: {
    color: Colors.tabLabelSelected,
  },
});

export default function TabBarLabel({ focused, title }) {
  return (
    <Text style={[styles.tabBarLabel, focused ? styles.tabBarLabelActive : {}]}>{title}</Text>
  );
}

TabBarLabel.propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};
