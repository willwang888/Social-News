import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity,
  StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  rssContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    marginBottom: 5,
    padding: 7,
  },

  title: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },

  body: {
    color: '#777',
    fontSize: 12,
    paddingTop: 7,
  },

  footer: {
    color: '#AAA',
    fontSize: 9,
    fontWeight: '500',
    paddingTop: 7,
  },
});

class EntryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigation, entry } = this.props;
    navigation.navigate('Entry', { title: entry.title, entry });
  }

  render() {
    const { entry } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.rssContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {entry.title}
          </Text>

          <Text style={styles.footer}>
            {entry.published}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

EntryItem.propTypes = {
  navigation: PropTypes.object,
  entry: PropTypes.object,
};

export default withNavigation(EntryItem);
