import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './home/Home';
import AppRoute from './app';

const MainRoute = createStackNavigator({
  First: {
    screen: HomeScreen
  },
  App: {
    screen: AppRoute
  }
});

export default MainRoute;