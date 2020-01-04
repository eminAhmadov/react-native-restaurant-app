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
    });
  }

  render() {
    const { title } = this.state;
    const { navigation } = this.props;
    return (
      <Container style={styles.mainContainer}>
        <HeaderFood
          navigation={navigation}
        />
        <Content style={styles.titleTextContent}>
          <Text style={styles.titleText}>{title}</Text>
          <FoodItem />
        </Content>
      </Container>
    );
  }
}
