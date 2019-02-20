import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import EntryItem from './EntryItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
});

const ArticlesList = (props) => {
  const renderArticles = () => props.entries.map((entry, index) => (
    <EntryItem key={index} entry={entry} addBookmark={props.addBookmark} />
  ));

  return (
    <ScrollView style={styles.container}>
      {renderArticles()}
    </ScrollView>
  );
};

ArticlesList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  addBookmark: PropTypes.func,
};


export default withNavigation(ArticlesList);
