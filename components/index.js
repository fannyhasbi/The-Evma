import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './home/index';

export default MainRoute = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
});
