import React from 'react';
import { Text } from 'react-native';
import {
  Container, List, ListItem, Left, Body, Icon,
} from 'native-base';

export default class Sidebar extends React.Component {
  render() {
    const {
      goToBurgers,
      goToChicken,
      goToPizza,
    } = this.props;
    return (
      <Container style={{
        backgroundColor: 'white',
        paddingTop: 40,
      }}
      >
        <List>
          <ListItem itemDivider>
            <Text>
                    Food
            </Text>
          </ListItem>
          <ListItem button onPress={goToBurgers}>
            <Left>
              <Icon type="MaterialCommunityIcons" name="hamburger" style={{ fontSize: 22 }} />
            </Left>
            <Body>
              <Text>
                Burgers
              </Text>
            </Body>
          </ListItem>
          <ListItem button onPress={goToChicken}>
            <Left>
              <Icon type="Entypo" name="bowl" style={{ fontSize: 22 }} />
            </Left>
            <Body>
              <Text>
                Chicken
              </Text>
            </Body>
          </ListItem>
          <ListItem button onPress={goToPizza}>
            <Left>
              <Icon type="MaterialCommunityIcons" name="pizza" style={{ fontSize: 22 }} />
            </Left>
            <Body>
              <Text>
                Pizza
              </Text>
            </Body>
          </ListItem>
          <ListItem itemDivider>
            <Text>
                    Beverages
            </Text>
          </ListItem>
          <ListItem>
            <Left>
              <Icon type="Entypo" name="drink" style={{ fontSize: 22 }} />
            </Left>
            <Body>
              <Text>
                Drinks
              </Text>
            </Body>
          </ListItem>
        </List>
      </Container>
    );
  }
}
