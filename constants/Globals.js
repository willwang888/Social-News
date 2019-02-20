import { StyleSheet } from 'react-native';
import Color from 'color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from './Fonts';
import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  responsiveBox: {
    padding: wp('10.5%'),
    paddingTop: hp('10.5%'),
    flexDirection: 'column',
  },
  text: {
    fontFamily: Fonts.sansSerifRegular,
  },
  textHeaderLarge: {
    fontFamily: Fonts.serifBold,
    color: Colors.darkText,
    fontSize: 32,
    marginBottom: 20,
  },
  textBodyLarge: {
    fontFamily: Fonts.sansSerifRegular,
    color: Colors.darkText,
    fontSize: 18,
  },
  textBody: {
    fontFamily: Fonts.sansSerifRegular,
    fontSize: 16,
  },
  input: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 4,
    marginBottom: 30,
    paddingVertical: 10,
  },
  buttonBlackBorder: {
    backgroundColor: Colors.white,
    borderColor: Colors.darkText,
    borderWidth: 2,
    borderBottomWidth: 5,
    marginBottom: 30,
    paddingVertical: 10,
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonYellow: {
    backgroundColor: Color(Colors.accentPrimary).darken(0.2).alpha(0.7),
    borderColor: Color(Colors.accentPrimary).darken(0.2).alpha(0.7),
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 2,
    borderBottomWidth: 5,
    marginBottom: 30,
  },
  buttonTextDark: {
    color: Colors.darkText,
    fontFamily: Fonts.sansSerifBold,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  buttonTextWhite: {
    color: Colors.white,
    fontFamily: Fonts.sansSerifBold,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  textCenter: {
    textAlign: 'center',
  },
  textYellow: {
    color: Color(Colors.accentPrimary).darken(0.25),
    // color: Colors.accentPrimary,
  },
  textHighlight: {
    backgroundColor: Color(Colors.accentPrimary).alpha(0.25),
  },
});
