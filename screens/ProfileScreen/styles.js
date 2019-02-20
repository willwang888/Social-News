import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  collectionCard: {
    marginBottom: 30,
  },
  collectionCardTextWrapper: {
    borderColor: Colors.darkText,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  collectionCardImage: {
    height: 175,
  },
});
