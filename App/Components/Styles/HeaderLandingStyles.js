import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'ios' ? '9%' : '8%',
    flex: 0,
    zIndex: 30,
  },
  bodyStyle: {
  },
  titleText: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: 'orange',
  },
  iconStyle: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: 'white',
  },
});
