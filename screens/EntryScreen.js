import React, { PropTypes } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import EntryDetail from '../components/EntryDetail';
import {connect} from 'react-redux';

import { addBookmark } from '../redux/actions/bookmarks.actions';

class EntryScreen extends React.Component {

  // Sets alert params. Needed to show header button alerts
  componentDidMount(){
    this.props.navigation.setParams({ addBookmark: this.addBookmark });
  }

  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
          title: navigation.getParam('title', 'Bookmarks'),
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
          headerRight: <Button
            onPress={() => params.addBookmark(navigation.getParam('entry'))}
            title="Bookmark"
            color="white"
          />
      };
  };

  addBookmark = (entry) => {
    this.props.addBookmark(entry)
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

const mapStateToProps = (state) => ({
  globals: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (bookmarkObj) => dispatch(addBookmark(bookmarkObj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryScreen);
