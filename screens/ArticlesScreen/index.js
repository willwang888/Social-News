import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ArticlesList from '../../components/ArticlesList';
import Container from '../../components/Container';


export default class ArticlesScreen extends React.Component {
  // Initializes navigation header
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: navigation.getParam('title', 'No Title Here'),
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'black' },
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ArticlesList
          title={navigation.getParam('title', 'no title')}
          entries={navigation.getParam('entries', [])}
          addBookmark={navigation.getParam('addBookmark')}
        />
      </Container>
    );
  }
}

ArticlesScreen.propTypes = {
  navigation: PropTypes.object,
};
