import React from 'react';
import { View } from 'react-native';
import { Content, Text } from 'native-base';

import HeaderFood from '../Components/HeaderFood';
import CartItem from '../Components/CartItem';

import styles from './Styles/CartStyles';

export default class Cart extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <HeaderFood
          navigation={navigation}
        />
        <View style={styles.parentView}>
          <Content>
            <CartItem title="BBQ Burger" />
            <CartItem title="Spicy Burger" />
            <CartItem title="Pizza" />
          </Content>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Total:</Text>
          </View>
        </View>
      </View>
    );
  }
}
