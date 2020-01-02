import React, { Component } from 'react';
import {
  ScrollView, View,
} from 'react-native';

import HeaderLanding from '../Components/HeaderLanding';
import PromoFoodItem from '../Components/PromoFoodItem';

// Styles
import styles from './Styles/LaunchScreenStyles';

const burgerImage = require('../Images/burger.jpg');
const chickenImage = require('../Images/chicken.jpg');
const pizzaImage = require('../Images/pizza.jpg');

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />
        <ScrollView style={styles.scrollViewStyle}>
          <PromoFoodItem
            image={burgerImage}
            title="BURGER"
          />
          <PromoFoodItem
            image={chickenImage}
            title="CHICKEN"
          />
          <PromoFoodItem
            image={pizzaImage}
            title="PIZZA"
          />
        </ScrollView>
      </View>
    );
  }
}
