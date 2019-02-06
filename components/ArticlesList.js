import React, { PropTypes } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EntryItem from './EntryItem';
import { withNavigation } from 'react-navigation';

const ArticlesList = (props) => {
  const renderArticles = () => props.entries.map((entry, index) => (
    <EntryItem key={index} entry={entry} addBookmark={props.addBookmark} />
  ));

  return (
    <ScrollView style={styles.container} >
      {renderArticles()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  }
});

export default withNavigation(ArticlesList);
