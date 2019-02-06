import React, { PropTypes } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import EntryDetail from '../components/EntryDetail';

export default class EntryScreen extends React.Component {

  // Sets alert params. Needed to show header button alerts
  componentDidMount(){
    this.props.navigation.setParams({ addBookmark: this.addBMark });
  }

  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
          title: navigation.getParam('title', 'No Title Here'),
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
          headerRight: <Button
            onPress={() => params.addBookmark(navigation.getParam('entry'))}
            title="Bookmark"
            color="white"
          />
      };
  };

  addBMark(entry) {
    console.log("add bookmark " + entry)
  }

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
