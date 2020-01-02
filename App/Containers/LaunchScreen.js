import React, { Component } from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';
import { Images } from '../Themes';

import HeaderLanding from '../Components/HeaderLanding';
import PromoFoodItem from '../Components/PromoFoodItem';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />
        <PromoFoodItem />
      </View>
    );
  }
}
