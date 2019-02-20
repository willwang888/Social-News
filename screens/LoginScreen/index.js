import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PaddedContainer from '../../components/PaddedContainer';
import { loginAction } from '../../redux/actions/user.actions';

import globalStyles from '../../constants/Globals';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
  }

  handleLoginPress = () => {
    const { username, password } = this.state;
    const { login } = this.props;

    login(username, password);
  }

  navigateToSignupScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  }

  render() {
    console.log("PROPS IN LOGIN ", this.props.globals);
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

LoginScreen.propTypes = {
  navigation: PropTypes.object,
  login: PropTypes.func,
};


const mapStateToProps = (state) => ({
  globals: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginAction(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
