import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PaddedContainer from '../../components/PaddedContainer';

import globalStyles from '../../constants/Globals';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
  }

  handleLoginPress = () => {
    console.log(this.state);
  }

  navigateToSignupScreen = () => {
    this.props.navigation.navigate('Signup');
  }

  render() {
    const { username, password } = this.state;
    return (
      <PaddedContainer>
        <Text style={[globalStyles.textHeaderLarge, globalStyles.textCenter]}>Paper</Text>
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ username: text })}
          value={username}
          placeholder="Enter username..."
        />
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ password: text })}
          value={password}
          placeholder="Enter password..."
        />
        <TouchableOpacity onPress={() => this.handleLoginPress()}>
          <View style={[globalStyles.buttonBlackBorder]}>
            <Text style={[globalStyles.buttonTextDark]}>Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToSignupScreen()}>
          <View style={[globalStyles.buttonYellow]}>
            <Text style={[globalStyles.buttonTextWhite]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </PaddedContainer>
    );
  }
}
