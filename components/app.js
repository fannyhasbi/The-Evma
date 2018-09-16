import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import DashboardScreen from './dashboard/Dashboard';

const AppRoute = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScreen
  }
});

export default AppRoute;