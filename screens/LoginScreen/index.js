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

    const url = "http://127.0.0.1:8000/users/login";

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)

        // Response ok?
        

        this.props.navigation.navigate('Settings');
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
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
