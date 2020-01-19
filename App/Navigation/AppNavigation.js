import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import FoodScreen from '../Containers/FoodScreen';
import Cart from '../Containers/Cart';
import FoodDetails from '../Containers/FoodDetails';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  FoodScreen: { screen: FoodScreen },
  Cart: { screen: Cart },
  FoodDetails: { screen: FoodDetails },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default createAppContainer(PrimaryNav);
