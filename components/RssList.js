import React, { PropTypes } from 'react';
import { ScrollView, Text, RefreshControl, StyleSheet } from 'react-native';
import RssItem from './RssItem';

const RssList = (props) => {

  // Creates RssItem components with the subscribed URLs
  const renderRssItems = () => props.urls.map((oneUrl, index) => (
    <RssItem
      key={oneUrl}
      url={oneUrl}
      handleDelete={props.handleDelete}
      addBookmark={props.addBookmark}
    />
  ));

  return(
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={props.isRefreshing}
          onRefresh={props.handleRefresh}
        />
      }
    >
      { props.urls.length ?
        renderRssItems() :
        <Text style={styles.error}>No RSS saved yet, add a new one 👆</Text>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  error: {
    color: '#777',
    textAlign: 'center',
    marginTop: 15
  }
});

export default RssList;
