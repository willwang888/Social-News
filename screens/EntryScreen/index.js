import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import EntryDetail from '../../components/EntryDetail';
import Container from '../../components/Container';
import { addBookmark } from '../../redux/actions/bookmarks.actions';

import styles from './styles';

class EntryScreen extends React.Component {
  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: navigation.getParam('title', 'Bookmarks'),
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'black' },
      headerRight: <Button
        onPress={() => params.addBookmark(navigation.getParam('entry'))}
        title="Bookmark"
        color="white"
                   />,
    };
  };

  // Sets alert params. Needed to show header button alerts
  componentDidMount() {
    const { navigation, addBookmark } = this.props;
    navigation.setParams({ addBookmark });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <EntryDetail entry={navigation.getParam('entry')} />
      </Container>
    );
  }
}

EntryScreen.propTypes = {
  addBookmark: PropTypes.func,
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({
  globals: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (bookmarkObj) => dispatch(addBookmark(bookmarkObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryScreen);
