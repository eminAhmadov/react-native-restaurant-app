import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  parentView: {
    height: '100%',
    width: '100%',
  },
  footerContainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerText: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    marginTop: 5,
  },
});
