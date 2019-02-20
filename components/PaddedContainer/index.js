import React from 'react';
import { View } from 'react-native';
import styles from '../../constants/Globals';
import Container from '../Container';

const PaddedContainer = ({ children }) => (
  <Container>
    <View style={styles.responsiveBox}>
      { children }
    </View>
  </Container>
);


export default PaddedContainer;
