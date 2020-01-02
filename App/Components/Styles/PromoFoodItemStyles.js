import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../Themes';

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  foodCard: {
    height: HEIGHT / 2,
    alignItems: 'center',
  },
  promoImage: {
    height: '100%',
  },
  textView: {
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  foodTitle: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: '20%',
  },
});
