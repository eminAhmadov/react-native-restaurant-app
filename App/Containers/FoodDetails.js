import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
  Content, Text, Container, Button, Icon,
} from 'native-base';

import HeaderFood from '../Components/HeaderFood';

import styles from './Styles/FoodDetailsStyles';

export default class Cart extends React.Component {
  componentWillMount() {
    const { navigation } = this.props;
    this.setState({
      title: navigation.getParam('title', ''),
      image: navigation.getParam('image', ''),
      price: navigation.getParam('price', ''),
    });
  }

  render() {
    const {
      image,
      title,
      price,
    } = this.state;
    const {
      navigation,
    } = this.props;
    return (
      <Container>
        <HeaderFood navigation={navigation} />
        <ImageBackground source={image} style={styles.backgroundImage}>

          <Content style={styles.foodContent}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.name}>
                <Text style={styles.nameText}>
                  {title}
                </Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>
                  {price}
                  {' '}
                    USD
                </Text>
              </View>
            </View>

            <Button
              iconLeft
              dark
              style={styles.addButton}
              onPress={() => alert('test')}
            >
              <Text style={styles.addText}>
                Add
              </Text>
              <Icon type="MaterialCommunityIcons" name="plus" style={styles.addIcon} />
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
