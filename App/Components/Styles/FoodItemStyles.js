import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../Themes';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const SCALE = HEIGHT / WIDTH;

export default StyleSheet.create({
  foodItemView: {
    width: '100%',
    height: HEIGHT / 4,
    padding: '5%',
  },
  priceView: {
    backgroundColor: 'green',
    height: '20%',
    width: '30%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  priceText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  foodImageView: {
    width: '60%',
    height: '70%',
    position: 'absolute',
    paddingTop: '12%',
    paddingLeft: '10%',
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  foodDescriptionView: {
    height: '60%',
    width: '60%',
    position: 'absolute',
    zIndex: -1,
    marginLeft: '35%',
    marginTop: '5%',
    borderRadius: 40,
    backgroundColor: '#F4F4F4',

  },
  foodTextView: {
    position: 'absolute',
    width: '40%',
    height: '100%',
    zIndex: 1,
    marginLeft: '40%',
  },
  foodTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '5%',
    fontSize: 18,
  },
  foodDescription: {
    textAlign: 'center',
    fontWeight: '400',
    paddingTop: 5,
    fontSize: SCALE * 7,
  },
});
