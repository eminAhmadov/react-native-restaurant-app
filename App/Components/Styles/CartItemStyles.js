import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 150,
  },
  hiddenRowStyle: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 40,
  },
  visibleRowStyle: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    alignSelf: 'center',
  },
  itemTextContainer: {
    marginRight: 55,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  itemTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: 'gray',
    fontSize: 14,
  },
  itemCounterContainer: {
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    width: 70,
    height: '100%',
    justifyContent: 'center',
  },
  itemCountUp: {
    fontSize: Platform.OS === 'ios' ? 20 : 50,
    color: 'green',
  },
  itemCountText: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    marginRight: 20,
  },
  itemCountDown: {
    fontSize: Platform.OS === 'ios' ? 20 : 50,
    color: 'green',
  },
});
