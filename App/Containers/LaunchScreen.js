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
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />
        <ScrollView style={styles.scrollViewStyle}>
          <PromoFoodItem
            navigation={navigation}
            image={burgerImage}
            title="BURGER"
          />
          <PromoFoodItem
            navigation={navigation}
            image={chickenImage}
            title="CHICKEN"
          />
          <PromoFoodItem
            navigation={navigation}
            image={pizzaImage}
            title="PIZZA"
          />
        </ScrollView>
      </View>
    );
  }
}
