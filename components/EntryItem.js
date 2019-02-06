import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity,
         StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class EntryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log("pressed")
    this.props.navigation.navigate('Entry', { title: this.props.entry.title, entry: this.props.entry });
  }

  render() {
    const entry = this.props.entry;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.rssContainer}>
          <Text style={styles.title} numberOfLines={2} >
            {entry.title}
          </Text>

          <Text style={styles.footer}>
            {entry.author}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rssContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    marginBottom: 5,
    padding: 7
  },

  title: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600'
  },

  body: {
    color: '#777',
    fontSize: 12,
    paddingTop: 7
  },

  footer: {
    color: '#AAA',
    fontSize: 9,
    fontWeight: '500',
    paddingTop: 7
  }
});

export default withNavigation(EntryItem);
