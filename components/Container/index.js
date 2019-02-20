import React from 'react';
import { View } from 'react-native';
import styles from '../../constants/Globals';

const Container = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);


export default Container;
