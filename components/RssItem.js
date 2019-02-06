import React from 'react';
import { View, Text, TouchableOpacity,
         ActivityIndicator, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as rssParser from 'react-native-rss-parser';

class RssItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      title: '',
      description: '',
      link: '',
      entries: [],
      isLoading: true
    };

    this.handlePress = this.handlePress.bind(this);
  }

  // Performs async fetch of RSS url
  componentDidMount() {
    console.log("URL for RSS Item is: " + this.state.url)
    fetch(this.state.url)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log("here")
        console.log(typeof(rss))
        console.log(rss.title);
        console.log(rss.items.length);
        console.log(rss.links[0].url);

        let arr = rss.items

        arr.sort(function(a,b){
          let d1 = new Date(a.published)
          let d2 = new Date(b.published)
          if(d1.getTime() <= d2.getTime()){
            return 1;
          }
          return -1;
        })

        this.setState({
          title: rss.title,
          description: rss.description,
          link: rss.links[0].url,
          entries: arr,
          isLoading: false
        });
    });
  }

  handlePress() {
    console.log(this.state.entries)
    this.props.navigation.navigate('Articles', {
      title: this.state.title,
      entries: this.state.entries,
      addBookmark: this.props.addBookmark
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.state.isLoading ? () => {} : this.handlePress}
        onLongPress={() => this.props.handleDelete(this.props.url)}
      >
        <View style={styles.rssContainer}>
          { this.state.isLoading ?
            <ActivityIndicator color={'#FFF'} style={styles.activityIndicator} /> :
            <View>
              <Text style={styles.title} numberOfLines={2} >
                {this.state.title}
              </Text>

              <Text style={styles.body} numberOfLines={3} >
                {this.state.description}
              </Text>

              <Text style={styles.footer}>
                {this.state.link}
              </Text>
            </View>
           }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rssContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#d6d7da',
    marginBottom: 5
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },

  body: {
    color: 'black',
    fontSize: 12,
    paddingTop: 7
  },

  footer: {
    color: 'black',
    fontSize: 10,
    fontWeight: '500',
    paddingTop: 7
  },

  activityIndicator: {
    padding: 15
  }
});

export default withNavigation(RssItem);
