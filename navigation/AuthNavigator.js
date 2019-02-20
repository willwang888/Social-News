import { createStackNavigator } from 'react-navigation';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = createStackNavigator(
  {
    'Login': {
      screen: LoginScreen,
    },
    'Signup': {
      screen: SignupScreen,
    },
  },
  {
    headerMode: 'screen',
  }
);

export default AuthNavigator;
