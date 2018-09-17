import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

StatusBar.setHidden(true);

import DashboardScreen from './dashboard/index';
import ConfirmationScreen from './confirmation/index';
import ScannerScreen from './scanner/index';
import ProfileScreen from './profile/index';

const AppRoute = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  Confirmation: {
    screen: ConfirmationScreen,
    navigationOptions: {
      title: 'Confirmation'
    }
  },
  Scanner: {
    screen: ScannerScreen,
    navigationOptions: {
      title: 'Scan QR'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile'
    }
  }
});

export default AppRoute;