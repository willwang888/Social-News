import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';

const EntryDetail = (props) => {
  const { entry } = props;
  return (
    <WebView
      source={{ uri: entry.links[0].url }}
      style={{ marginTop: 20 }}
    />
  );
};

EntryDetail.propTypes = {
  entry: PropTypes.object,
};

export default EntryDetail;
