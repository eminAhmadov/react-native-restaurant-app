import React, { Component } from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';

// Styles
import styles from './Styles/PromoFoodItemStyles';

const foodItemOne = require('../Images/burger.jpg');

export default class PromoFoodItem extends Component {
  render() {
    return (
      <View style={styles.foodCard}>
        <View>
          <Image style={styles.promoImage} source={foodItemOne} resizeMode="contain" blurRadius={5} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.foodTitle}>BURGERS</Text>
        </View>
      </View>
    );
  }
}
