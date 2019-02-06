import React from 'react';
import { Alert, AlertIOS, Button, View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as rssParser from 'react-native-rss-parser';
import RssList from '../components/RssList';
import {connect} from 'react-redux';

import { addBookmark } from '../redux/actions/bookmarks.actions';


class LinksScreen extends React.Component {
  constructor(props){
    super(props);

    // Initialized for testing
    this.state ={
      rssList: ["https://medium.com/feed/@Medium", "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"],
      isLoading: true
    }

    this.getRssList = this.getRssList.bind(this);
    this.handleSaveRss = this.handleSaveRss.bind(this);
    this.handleDeleteRss = this.handleDeleteRss.bind(this);
    this.openAddRssAlert = this.openAddRssAlert.bind(this);
  }

  // Sets alert params. Needed to show header button alerts
  componentDidMount(){
    this.props.navigation.setParams({ openAddRssAlert: this.openAddRssAlert });
  }

  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
          title: 'RSS Feed',
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
          headerRight: <Button
            onPress={() => params.openAddRssAlert()}
            title="+"
            color="white"
          />
      };
  };

  // Placeholder function for pull-to-refresh functionality
  getRssList() {
      this.setState({
        rssList: this.state.rssList
      });
  }

  // Saves new RSS feed into local array
  handleSaveRss(rssUrl) {
    console.log("Saving: " + rssUrl)

    let newRssList = this.state.rssList;

    console.log(this.state.rssList)

    if (newRssList.length && !newRssList.includes(rssUrl)) {
      newRssList.push(rssUrl);
    }

    this.setState({
      rssList: newRssList
    });

  }

  // Opens alert to confirm deletion of RSS feed
  handleDeleteRss(rssUrl) {
    Alert.alert(
      'Delete RSS feed?',
      'this action cannot be undone',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Delete', onPress: () => {
          let newRssList  = this.state.rssList;
          newRssList.splice(newRssList.indexOf(rssUrl), 1);

          this.setState({
            rssList: newRssList
          });

        }, style: 'destructive' }
      ]
    );
  }

  // Opens prompt for user to input new RSS feed
  openAddRssAlert() {
    console.log("in alert function")
    AlertIOS.prompt(
      'Add New Subscription',
      'Enter RSS Link of what you wish to subscribe to',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (link) => this.handleSaveRss(link),
        },
      ],
    );
  }

  render() {
    console.log("HEREEEE")
    console.log(this.props.globals);
    console.log(this.state)
    console.log("Adding bookmark")

    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.addBookmark({"test": "bookmark2"})} title="Click Me1" />
        <RssList
          urls={this.state.rssList}
          isRefreshing={false}
          handleRefresh={this.getRssList}
          handleDelete={this.handleDeleteRss}
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

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
