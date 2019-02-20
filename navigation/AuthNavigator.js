import { createStackNavigator } from 'react-navigation';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AuthNavigator = createStackNavigator(
  {
    'Login': {
      screen: LoginScreen,
    },
    'Signup': {
      screen: SignupScreen,
    },
    'Settings': {
      screen: SettingsScreen,
    },
  },
  {
    headerMode: 'screen',
  }
);

export default AuthNavigator;
