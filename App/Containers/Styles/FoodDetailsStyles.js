import { StyleSheet, Dimensions } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  foodContent: {
    position: 'absolute',
    marginTop: '20%',
    height: '100%',
    width: '100%',
  },
  name: {
    height: HEIGHT / 3,
    width: WIDTH / 2,
    paddingLeft: '5%',
  },
  nameText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '30%',
  },
  price: {
    height: HEIGHT / 3,
    width: WIDTH / 2,
    alignItems: 'center',
  },
  priceText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '45%',
  },
  addButton: {
    backgroundColor: 'green',
    marginLeft: '5%',
    marginTop: 100,
    height: 50,
    width: '40%',
    borderRadius: 20,
  },
  addText: {
    fontSize: 22,
    paddingLeft: 10,
    color: 'white',
    fontWeight: '400',
  },
  addIcon: {
    fontSize: 30,
    color: 'white',
    paddingRight: 10,
  },
});
