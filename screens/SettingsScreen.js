import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet } from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
  constructor(props){
    super(props);

    // Initialized for testing
    this.state ={
      rssList: ["https://medium.com/feed/@Medium", "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"],
      isLoading: true
    }
  }

  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
          title: "Bookmarks",
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
      };
  };

  render() {
    return (
      <View style={styles.container}>
        <ArticlesList
          title={this.props.navigation.getParam('Bookmarks', 'no title')}
          entries={this.props.globals.bookmarks}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const mapStateToProps = (state) => ({
  globals: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (bookmarkObj) => dispatch(addBookmark(bookmarkObj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
