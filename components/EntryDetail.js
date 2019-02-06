import React, { PropTypes } from 'react';
import { WebView, ScrollView, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const EntryDetail = (props) => {
  const entry = props.entry;
  console.log("HELLO THERE")
  console.log(entry.links[0].url)
  console.log(typeof(entry.links[0].url))

  return (
    <WebView
      source={{uri: entry.links[0].url}}
      style={{marginTop: 20}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 5,
    padding: 7
  },

  title: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600'
  },

  author: {
    color: '#AAA',
    fontSize: 9,
    fontWeight: '500',
    paddingTop: 7
  },

  a: {
    color: Colors.blue
  }
});

export default EntryDetail;
