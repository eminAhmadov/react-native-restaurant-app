import React, { Component } from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';
import { Images } from '../Themes';

import HeaderLanding from '../Components/HeaderLanding';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />

      </View>
    );
  }
}
