import React, { Component } from 'react';
import {
  Text, Image, View, Platform, TouchableOpacity,
} from 'react-native';

// Styles
import styles from './Styles/FoodItemStyles';

const burgerImage = require('../Images/burger.jpg');

export default class FoodItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('FoodItem')}>
        <View style={styles.foodItemView}>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>10$</Text>
          </View>
          <View style={styles.foodImageView}>
            <Image style={styles.foodImage} source={burgerImage} resizeMode="contain" />
          </View>
          <View style={styles.foodDescriptionView}>
            <View style={styles.foodTextView}>
              <Text style={styles.foodTitle}>Title</Text>
              <Text style={styles.foodDescription}>Body blody fucker bastard bloody</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
