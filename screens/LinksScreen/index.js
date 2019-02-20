import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertIOS, Button } from 'react-native';
import { connect } from 'react-redux';
import RssList from '../../components/RssList';
import Container from '../../components/Container';

import { addBookmark } from '../../redux/actions/bookmarks.actions';

// import styles from './styles';

class LinksScreen extends React.Component {
  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'RSS Feed',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'black' },
      headerRight: <Button
        onPress={() => params.openAddRssAlert()}
        title="+"
        color="white"
                   />,
    };
  };

  // Initialized for testing
  state = {
    rssList: ['https://medium.com/feed/@Medium', 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'],
    bookmarks: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ openAddRssAlert: this.openAddRssAlert });
  }

  // Placeholder function for pull-to-refresh functionality
  getRssList = () => {
    const { rssList } = this.state;
    this.setState({
      rssList,
    });
  }

  addBookmark = (entry) => {
    const { bookmarks } = this.state;
    const currBookmarks = bookmarks;

    currBookmarks.push(entry);

    this.setstate({
      bookmarks: currBookmarks,
    });
  }

  // Saves new RSS feed into local array
  handleSaveRss = (rssUrl) => {
    const { rssList } = this.state;
    const newRssList = [...rssList];

    if (newRssList.length && !newRssList.includes(rssUrl)) {
      newRssList.push(rssUrl);
    }

    this.setState({
      rssList: newRssList,
    });
  }

  // Opens alert to confirm deletion of RSS feed
  handleDeleteRss = (rssUrl) => {
    const { rssList } = this.state;
    Alert.alert(
      'Delete RSS feed?',
      'this action cannot be undone',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Delete',
          onPress: () => {
            const newRssList = rssList;
            newRssList.splice(newRssList.indexOf(rssUrl), 1);

            this.setState({
              rssList: newRssList,
            });
          },
          style: 'destructive' },
      ]
    );
  }

  // Opens prompt for user to input new RSS feed
  openAddRssAlert = () => {
    AlertIOS.prompt(
      'Add New Subscription',
      'Enter RSS Link of what you wish to subscribe to',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (link) => this.handleSaveRss(link),
        },
      ],
    );
  }

  render() {
    const { rssList } = this.state;

    return (
      <Container>
        <RssList
          urls={rssList}
          isRefreshing={false}
          handleRefresh={this.getRssList}
          handleDelete={this.handleDeleteRss}
          addBookmark={this.addBookmark}
        />
      </Container>
    );
  }
}

LinksScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
