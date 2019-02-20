import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticlesList from '../../components/ArticlesList';
import Container from '../../components/Container';

class SettingsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Bookmarks',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'black' },
    };
  };

  render() {
    const { navigation, globals } = this.props;
    return (
      <Container>
        <ArticlesList
          title={navigation.getParam('Bookmarks', 'no title')}
          entries={globals.bookmarks}
        />
      </Container>
    );
  }
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
  globals: PropTypes.object,
};

const mapStateToProps = (state) => ({
  globals: state,
});

export default connect(mapStateToProps, null)(SettingsScreen);
