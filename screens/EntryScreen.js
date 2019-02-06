import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import EntryDetail from '../components/EntryDetail';

export default class EntryScreen extends React.Component {

  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
          title: navigation.getParam('title', 'No Title Here'),
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
      };
  };

  render() {
    return (
      <View style={styles.container}>
        <EntryDetail entry={this.props.navigation.getParam('entry')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
});
