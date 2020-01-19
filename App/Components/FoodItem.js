import React, { Component } from 'react';
import {
  Text, Image, View, Platform, TouchableOpacity,
} from 'react-native';

// Styles
import styles from './Styles/FoodItemStyles';

export default class FoodItem extends Component {
  render() {
    const {
      foodTitle,
      foodDescription,
      foodPrice,
      foodImage,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => alert('FoodItem')}>
        <View style={styles.foodItemView}>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>
              {foodPrice}
$
            </Text>
          </View>
          <View style={styles.foodImageView}>
            <Image style={styles.foodImage} source={foodImage} resizeMode="contain" />
          </View>
          <View style={styles.foodDescriptionView}>
            <View style={styles.foodTextView}>
              <Text style={styles.foodTitle}>{foodTitle}</Text>
              <Text style={styles.foodDescription}>{foodDescription}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
