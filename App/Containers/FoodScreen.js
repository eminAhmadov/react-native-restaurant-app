import React, { Component } from 'react';
import {
  ScrollView, View, Text,
} from 'react-native';

import { Container, Content } from 'native-base';
import HeaderFood from '../Components/HeaderFood';
import FoodItem from '../Components/FoodItem';

// Styles
import styles from './Styles/FoodScreenStyles';

export default class FoodScreen extends Component {
  componentWillMount() {
    const { navigation } = this.props;
    this.setState({
      title: navigation.getParam('title', ''),
      foodTitles: navigation.getParam('foodTitles', ''),
      foodDescriptions: navigation.getParam('foodDescriptions', ''),
      foodPrices: navigation.getParam('foodPrices', ''),
      foodImages: navigation.getParam('foodImages', ''),
      foodSize: navigation.getParam('foodSize', ''),
    });
  }

  render() {
    const {
      title,
      foodTitles,
      foodDescriptions,
      foodPrices,
      foodImages,
      foodSize,
    } = this.state;
    const { navigation } = this.props;

    const foodItems = [];
    for (let i = 0; i < foodSize; i++) {
      foodItems.push(
        <View>
          <FoodItem
            foodTitle={foodTitles[i]}
            foodImage={foodImages[i]}
            foodDescription={foodDescriptions[i]}
            foodPrice={foodPrices[i]}
          />
        </View>,
      );
    }

    return (
      <Container style={styles.mainContainer}>
        <HeaderFood
          navigation={navigation}
        />
        <Content style={styles.titleTextContent}>
          <Text style={styles.titleText}>{title}</Text>

          {foodItems}

        </Content>
      </Container>
    );
  }
}
