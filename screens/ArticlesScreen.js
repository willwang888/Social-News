import React from 'react';
import { Alert, AlertIOS, Button, View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as rssParser from 'react-native-rss-parser';
import RssList from '../components/RssList';
import ArticlesList from '../components/ArticlesList';

export default class ArticlesScreen extends React.Component {
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
          title: navigation.getParam('title', 'No Title Here'),
          headerTitleStyle :{color:'white'},
          headerStyle: {backgroundColor:'black'},
      };
  };

  render() {
    return (
      <View style={styles.container}>
        <ArticlesList
          title={this.props.navigation.getParam('title', 'no title')}
          entries={this.props.navigation.getParam('entries', [])}
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
