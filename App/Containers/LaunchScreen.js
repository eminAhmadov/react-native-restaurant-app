import React, { Component } from 'react';
import {
  ScrollView, View,
} from 'react-native';
import { Drawer } from 'native-base';

import HeaderLanding from '../Components/HeaderLanding';
import PromoFoodItem from '../Components/PromoFoodItem';

// Styles
import styles from './Styles/LaunchScreenStyles';

const burgerImage = require('../Images/burger.jpg');
const chickenImage = require('../Images/chicken.jpg');
const pizzaImage = require('../Images/pizza.jpg');

export default class LaunchScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  render() {
    const { navigation } = this.props;
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={
          <Sidebar />
        }
        onClose={() => this.closeDrawer()}
      >
        <View style={styles.mainContainer}>
          <HeaderLanding />
          <ScrollView style={styles.scrollViewStyle}>
            <PromoFoodItem
              navigation={navigation}
              title="BURGER"
              image={burgerImage}
              foodTitles={['BBQ Burger', 'Spicy Burger', 'Big Burger']}
              foodDescriptions={['An awesome BBQ burger', 'For those who like something spicy', 'A really bug burger for those who like to eat a lot']}
              foodPrices={['10', '14', '15']}
              foodImages={[burgerImage, chickenImage, pizzaImage]}
              foodSize={3}
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
      </Drawer>
    );
  }
}
