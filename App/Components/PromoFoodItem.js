import React, { Component } from 'react';
import {
  Text, Image, View, Platform, TouchableOpacity,
} from 'react-native';

// Styles
import styles from './Styles/PromoFoodItemStyles';

export default class PromoFoodItem extends Component {
  render() {
    const {
      title,
      image,
      foodTitles,
      foodDescriptions,
      foodPrices,
      foodImages,
      foodSize,
      navigation,
    } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('FoodScreen', {
        title,
        foodTitles,
        foodDescriptions,
        foodPrices,
        foodImages,
        foodSize,
      })}
      >
        <View style={styles.foodCard}>
          <View>
            <Image
              style={styles.promoImage}
              source={image}
              resizeMode="contain"
              blurRadius={Platform.OS === 'ios' ? 5 : 2}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.foodTitle}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
