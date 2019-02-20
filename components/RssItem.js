import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity,
  ActivityIndicator, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as rssParser from 'react-native-rss-parser';

const styles = StyleSheet.create({
  rssContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#d6d7da',
    marginBottom: 5,
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },

  body: {
    color: 'black',
    fontSize: 12,
    paddingTop: 7,
  },

  footer: {
    color: 'black',
    fontSize: 10,
    fontWeight: '500',
    paddingTop: 7,
  },

  activityIndicator: {
    padding: 15,
  },
});

class RssItem extends React.Component {
  state = {
    title: '',
    description: '',
    link: '',
    entries: [],
    isLoading: true,
  };

  // Performs async fetch of RSS url
  componentDidMount() {
    const { url } = this.props;

    fetch(url)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        const arr = rss.items;

        arr.sort((a, b) => {
          const d1 = new Date(a.published);
          const d2 = new Date(b.published);
          if (d1.getTime() <= d2.getTime()) {
            return 1;
          }
          return -1;
        });

        this.setState({
          title: rss.title,
          description: rss.description,
          link: rss.links[0].url,
          entries: arr,
          isLoading: false,
        });
      });
  }

  handlePress = () => {
    const { navigation, addBookmark } = this.props;
    const { title, entries } = this.state;

    navigation.navigate('Articles', {
      title,
      entries,
      addBookmark,
    });
  }

  render() {
    const { isLoading, title, description, link } = this.state;
    const { handleDelete, url } = this.props;

    return (
      <TouchableOpacity
        onPress={isLoading ? () => {} : this.handlePress}
        onLongPress={() => handleDelete(url)}
      >
        <View style={styles.rssContainer}>
          { isLoading
            ? <ActivityIndicator color="#FFF" style={styles.activityIndicator} />
            : (
              <View>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>

                <Text style={styles.body} numberOfLines={3}>
                  {description}
                </Text>

                <Text style={styles.footer}>
                  {link}
                </Text>
              </View>
            )
           }
        </View>
      </TouchableOpacity>
    );
  }
}

RssItem.propTypes = {
  handleDelete: PropTypes.func,
  url: PropTypes.string,
  navigation: PropTypes.object,
  addBookmark: PropTypes.func,
};

export default withNavigation(RssItem);
