import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import DashboardScreen from './dashboard/index';
import KonfirmasiScreen from './konfirmasi/index';
import ScannerScreen from './scanner/index';
import ProfileScreen from './profile/index';

const AppRoute = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  Konfirmasi: {
    screen: KonfirmasiScreen,
    navigationOptions: {
      title: 'Konfirmasi'
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