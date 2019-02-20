import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import PaddedContainer from '../../components/PaddedContainer';

import styles from './styles';
import globalStyles from '../../constants/Globals';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
  }

  handleLoginPress = () => {
    console.log(this.state);
  }

  render() {

    // change later with redux user
    const user = {
      firstName: 'William',
      lastName: 'Wang',
      email: 'willwang@me.com',
      description: 'Hi there! I’m a software engineer at USC who is interested in making weird noises to strangers.',
      numFollowers: 123,
      numFollowings: 142,
    };

    const collections = [
      {
        name: 'Python',
        imageSrc: 'https://www.jetbrains.com/pycharm/img/screenshots/complexLook@2x.jpg',
      },
      {
        name: 'Python',
        imageSrc: 'https://www.jetbrains.com/pycharm/img/screenshots/complexLook@2x.jpg',
      },
      {
        name: 'Python',
        imageSrc: 'https://www.jetbrains.com/pycharm/img/screenshots/complexLook@2x.jpg',
      },
    ];

    return (
      <ScrollView>
        <PaddedContainer>
          <Text style={[globalStyles.textHeader]}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={[globalStyles.textBody]}>{user.description}</Text>
          <Text style={[globalStyles.textBodySmall, globalStyles.textGray]}>{`${user.numFollowers} Followers   ${user.numFollowings} Followings`}</Text>
          <TouchableOpacity onPress={() => this.handleLoginPress()}>
            <View style={[globalStyles.buttonBlackBorder]}>
              <Text style={[globalStyles.buttonTextDark]}>Follow</Text>
            </View>
          </TouchableOpacity>
          <Text style={[globalStyles.textHeaderSmall]}>Collections</Text>
          {
            collections.map((collection, index) => (
              <View style={styles.collectionCard} key={index}>
                <View style={styles.collectionCardTextWrapper}>
                  <Text style={[globalStyles.textBodyLarge, globalStyles.textBodyBold]}>{collection.name}</Text>
                </View>
                <Image
                  style={ styles.collectionCardImage }
                  source={ { uri: collection.imageSrc } }
                />
              </View>
            ))
          }
        </PaddedContainer>
      </ScrollView>
    );
  }
}
