import React, { Component } from 'react';
import {
  Text, Image, View, Platform, TouchableOpacity,
} from 'react-native';

// Styles
import styles from './Styles/PromoFoodItemStyles';

export default class PromoFoodItem extends Component {
  render() {
    const { image, title } = this.props;
    return (
      <TouchableOpacity onPress={() => alert(title)}>
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
