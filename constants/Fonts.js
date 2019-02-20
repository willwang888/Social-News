import { Font } from 'expo';

Font.loadAsync({
  'SourcesSansProRegular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
  'SourcesSansProSemiBold': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
  'SourcesSansProBold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
  'SourcesSansProBlack': require('../assets/fonts/SourceSansPro-Black.ttf'),
  'SourcesSansProItalic': require('../assets/fonts/SourceSansPro-Italic.ttf'),

  'PTSerifRegular': require('../assets/fonts/PT_Serif-Web-Regular.ttf'),
  'PTSerifBold': require('../assets/fonts/PT_Serif-Web-Bold.ttf'),
  'PTSerifBoldItalic': require('../assets/fonts/PT_Serif-Web-BoldItalic.ttf'),
  'PTSerifItalic': require('../assets/fonts/PT_Serif-Web-Italic.ttf'),

  'FrankRuhlLibreRegular': require('../assets/fonts/FrankRuhlLibre-Regular.ttf'),
  'FrankRuhlLibreBold': require('../assets/fonts/FrankRuhlLibre-Bold.ttf'),
  'FrankRuhlLibreMedium': require('../assets/fonts/FrankRuhlLibre-Medium.ttf'),
  'FrankRuhlLibreBlack': require('../assets/fonts/FrankRuhlLibre-Black.ttf'),
});

export default {
  normal: 'SourcesSansProRegular',
  bold: 'SourcesSansProRegular',
  boldItalic: 'HelveticaNeue-BoldItalic',
  sansSerifRegular: 'SourcesSansProRegular',
  sansSerifSemiBold: 'SourcesSansProSemiBold',
  sansSerifBold: 'SourcesSansProBold',
  sansSerifBlack: 'SourcesSansProBlack',
  sansSerifItalic: 'SourcesSansProItalic',
  serifRegular: 'FrankRuhlLibreRegular',
  serifBold: 'FrankRuhlLibreBold',
  serifMedium: 'FrankRuhlLibreMedium',
  serifBlack: 'FrankRuhlLibreBlack',
};
