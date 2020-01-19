import React, { Component } from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon,
} from 'native-base';

// Styles
import styles from './Styles/HeaderLandingStyles';

export default class HeaderLanding extends Component {
  render() {
    const { openDrawer, navigation } = this.props;
    return (
      <Container style={styles.headerContainer}>
        <Header style={styles.headerStyle}>
          <Left>
            <Button
              onPress={() => openDrawer()}
              transparent
            >
              <Icon style={styles.iconStyle} name="ios-menu" />
            </Button>
          </Left>
          <Body style={styles.bodyStyle}>
            <Text style={styles.titleText}>BBQ</Text>
          </Body>
          <Right>
            <Button
              onPress={() => navigation.navigate('Cart')}
              transparent
            >
              <Icon style={styles.iconStyle} type="Entypo" name="shopping-cart" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
