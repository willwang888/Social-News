import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, RefreshControl, StyleSheet } from 'react-native';
import RssItem from './RssItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  error: {
    color: '#777',
    textAlign: 'center',
    marginTop: 15,
  },
});

const RssList = ({ urls, handleDelete, addBookmark, isRefreshing, handleRefresh }) => {
  // Creates RssItem components with the subscribed URLs
  const renderRssItems = () => urls.map((oneUrl, index) => (
    <RssItem
      key={oneUrl}
      url={oneUrl}
      handleDelete={handleDelete}
      addBookmark={addBookmark}
    />
  ));

  return (
    <ScrollView
      style={styles.container}
      refreshControl={(
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
)}
    >
      { urls.length
        ? renderRssItems()
        : <Text style={styles.error}>No RSS saved yet, add a new one</Text>
      }
    </ScrollView>
  );
};

RssList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string),
  handleDelete: PropTypes.func,
  addBookmark: PropTypes.func,
  isRefreshing: PropTypes.bool,
  handleRefresh: PropTypes.func,
};

export default RssList;
