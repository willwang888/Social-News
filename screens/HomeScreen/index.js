import React from 'react';
import { Text, View } from 'react-native';
import Container from '../../components/Container';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Text>Hello!</Text>
      </Container>
    );
  }
}
