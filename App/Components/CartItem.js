import React from 'react';
import { View, Image } from 'react-native';
import {
  Content, Text, Icon, Button,
} from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';

import styles from './Styles/CartItemStyles';

const burgerImage = require('../Images/burger.jpg');

export default class CartItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.itemContainer}>
        <SwipeRow
          disableRightSwipe
          rightOpenValue={-100}
        >
          <View style={styles.hiddenRowStyle}>
            <Icon active name="trash" />
          </View>
          <View style={styles.visibleRowStyle}>
            <View style={styles.bodyContainer}>
              <Image
                source={burgerImage}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>
                  {title}
                </Text>
                <Text style={styles.itemPrice}>
                  15$
                </Text>
              </View>
              <View style={styles.itemCounterContainer}>
                <Button
                  transparent
                  onPress={() => {
                    alert('alma');
                  }}
                >
                  <Icon name="arrow-dropup" style={styles.itemCountUp} />
                </Button>
                <Text style={styles.itemCountText}>
                      2
                </Text>
                <Button
                  transparent
                  onPress={() => {
                    alert('alma');
                  }}
                >
                  <Icon name="arrow-dropdown" style={styles.itemCountDown} />
                </Button>
              </View>
            </View>
          </View>
        </SwipeRow>
      </View>
    );
  }
}
